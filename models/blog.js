let mongoose = require("mongoose");

const imageRootPath = "rootDirectory/images";
const BlogSchema = new mongoose.Schema({
    title : {type : String, required : true},
    content : {type : String, required : true},
    author : {type : String, required : true},
    date : {type : Date, default : Date.now, required : true},
    subTitle : {type : String, required : true},
    imagePath : {
        type : String,
        get : v => `${imagePath}/${v}`
    },
    comments : [{ 
        postedBy : {type : String, required : true},
        body : {type : String, required : true},
        date : {type : Date, default : Date.now, required : true},
}],
    likes : {type : Number, required : true}
});

module.exports = mongoose.model("Blog", BlogSchema);