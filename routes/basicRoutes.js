let express = require("express");
let router = express.Router();
const checkAuthMiddleware = require("../middleWares/checkAuthMiddleware.js");

router.get("/home",(req,res)=>{
    console.log("Get a request from client");
    console.log("Query Params : ", req.query);
    res.send("Get Request");
})

/*router.get("/home",(req,res,next)=>{
    console.log("Get a request from client");
    console.log("Query Params : ", req.query);
    //res.send("Get Request"); - If this first response is sent earlier then we cannot send the response in next Routing 
    //method of same path.
    next();
})

router.get("/home",(req,res)=>{
    console.log("Get a request from client2");
    console.log("Query Params : ", req.query);
    res.send("NodeJS 2");
})*/

router.post("/home",(req,res)=>{
    console.log("Post a request to the client");
    console.log("Requested body is : ", req.body.username);
    console.log("Requested body is : ", req.body);
    console.log("Requested Path is : ", req.path)
    res.send("Post Request");
})

router.delete("/home",(req,res)=>{
    console.log("Delete a request from client");
    res.send("Delete Request");
})

router.put("/home",(req,res)=>{
    console.log("Put a request for client");
    res.send("Put Request");
})

router.get("/understandingRequestObject/:id/:name", (req,res) => {
    let requestObject = {
        baseUrl : req.baseUrl,
        body : req.body,
        cookies : req.cookies,
        hostname : req.hostname,
        ip : req.ip,
        method : req.method,
        query : req.query,
        params1 : req.params.id,
        params2 : req.params.name,
        path : req.path
    }
    res.json(requestObject);
})

router.get("/name/:username/userDetails/:id",(req,res) =>{
    console.log(req.params.username);
    console.log(req.params.id);
    res.sendStatus(200);
})

 /*Multiple Exports are done in this way -

 let  obj = {
      name:"Prakhar",
      age:25  
 }
module.exports = obj;*/

module.exports = router;