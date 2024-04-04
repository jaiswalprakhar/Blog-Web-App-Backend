let express = require("express");
//let fs = require("fs/promises");
let fs = require("fs");
const path = require("path");
let router = express.Router();

router.get("/read/:filename",(req,res) =>{

    fs.readFile(path.resolve(__dirname, `../${req.params.filename}.txt`), "utf-8", (err,data)=>{
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
        }
    });  
    //Used Synchronous ReadFile

    /*let data = fs.readFileSync(path.resolve(__dirname,"../user.txt"));
    res.send(data);*/

    //Used Asynchronous ReadFile

    /*fs.readFile(path.resolve(__dirname,"../user.txt"), (err,data)=>{
        if(err){
            console.log(err);
            res.error();
        } else {
            console.log("Read file successfully");
            res.send(data);
        }*/

        //Used Promises with below async await -
        /*readFile();
        res.send("Success");*/

        console.log("I am not blocked from fs.read file function");

})

/*async function readFile(){
    let data = null;
    data = await fs.readFile(path.resolve(__dirname,"../user.txt"), "utf8");
    console.log("File Execution Result : ");
    console.log(data);
}*/

module.exports = router;