let express = require("express");
const User = require("../models/user.js");
const Blog = require("../models/blog.js");
let checkAuthenticationV2 = require("../middleWares/checkAuthMiddleware.js");
const router = express.Router();

//router.use(checkAuthenticationV2);

router.post("/addBlog", async (request,response) => {
    const newBlog = new Blog({ title : request.body.title, content : request.body.content, author : request.body.author, date : request.body.date, subTitle : request.body.subTitle, imagePath : request.body.imagePath, comments : { postedBy :  request.body.postedBy , body : request.body.body , date : request.body.date }, likes : request.body.likes });
    await newBlog.save();
    console.log("Blog Added" + newBlog);
    response.send(newBlog);
});

/*router.delete("/deleteBlog", (request,response) => {
    Blog.findOneAndDelete({
        $and: [
            { title : request.body.title }, 
            { subTitle : request.body.subTitle }
        ]}, (err,result) =>{
        if(err){
            response.send(err);
        }
        else {
            if(!result){
                response.send("No Blog found");
            }
            else{
                console.log("Blog Deleted Successfully" + result);
                response.send("Blog Deleted Successfully" + result);
            }
        }
    });
});*/

router.delete("/:id", (request, response) => {
    Blog.findOneAndDelete({_id : request.params.id}, request.body, (err, document) => {
        if(err){
            response.send(err);
        }
        else{
            response.send(document);
        }
    })
});

router.get("/getBlogByUser", checkAuthenticationV2, (request,response) => {
    Blog.find({ username : request.session.username }, (err,result) => {
        if(err){
            response.send(err);
        }
        else{
            response.send(result);
        }
    });
});

router.get("/:id", checkAuthenticationV2, (request,response) => {
    Blog.find({ _id : request.params.id }, (err,result) => {
        if(err){
            response.send(err);
        }
        else{
            response.send(result);
        }
    });
});

router.put("/:id", (request, response) => {
    Blog.findOneAndUpdate({_id : request.params.id}, {content : request.body.content}, {new : true}, (err, document) => {
        if(err){
            response.send(err);
        }
        else{
            response.send(document)
        }
    });
});


module.exports = router;