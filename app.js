let express = require("express"); //Imported Express module
let app = express();        //Created an object of express app
let bodyParser = require("body-parser");
let mL = require("./middleWares/logger.js");
let checkAuthMiddleware = require("./middleWares/checkAuthMiddleware.js");
let basicRouter = require("./routes/basicRoutes.js");
let fileRouter = require("./routes/fileRoutes.js");
let userRouter = require("./routes/userRoutes.js");
let blogRouter = require("./routes/blogRoutes.js");
let mongoose = require("mongoose");
let User = require("./models/user.js");
let Blog = require("./models/blog.js");

app.use(bodyParser.json());
app.use(mL);
app.use("/basic", basicRouter);
app.use("/file", fileRouter);
app.use("/user",userRouter);
app.use("/blog",blogRouter);

mongoose.connect("mongodb+srv://jaiswalprakhar:jaiswalprakhar98@cluster0.9wydelp.mongodb.net/blogwebsite?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error : "));
db.once("open", function() {
    console.log("Connected successfully");
})

app.get("/user", async(request,response) => {
    let users = await User.find({name : "Prakhar"});
    response.send(users);
})

let middleware = function(req,res,next){
    console.log("I am middleware");
    next();
}

let middleware1 = function(req,res,next){
    console.log("I am middleware1");
    next();
}

app.all("/add",middleware,middleware1,checkAuthMiddleware,(req,res)=>{
    console.log("Inside Request Handler");
    console.log(req.isAuthenticated);
    console.log("Invoked all the methods");
    res.send("Match all the methods with given path");
})

app.listen(8080, function(req,res){
    console.log("Listening to port " + 8080); 
})