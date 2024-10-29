let mongoose=require("mongoose")
let postsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "cat":String,
    "body":String,
    "uid":String,
    "name":String,
    "dop":Date,
    "acept":{
        type:String,
        default:"false"
    },
    "comm":[]

})
let pm=mongoose.model("post",postsch)
module.exports=pm