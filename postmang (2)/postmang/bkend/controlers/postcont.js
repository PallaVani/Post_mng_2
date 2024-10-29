let {v4:uuidv4}=require("uuid")
const pm = require("../models/postmodel")
let addpost=async(req,res)=>{
    try{
        let data=new pm({...req.body,"_id":uuidv4()})
      await  data.save()
        res.json({"msg":"post created"})
    }
    catch(err)
    {
        res.json({"msg":"error in adding post"})
    }

}
let getposts=async(req,res)=>{
    try{
        let data=await pm.find({"acept":"true"})
        res.json(data)

    }
    catch(err)
    {
        res.json({"msg":"error in fetching articals"})
    }

}
let getbycat=async(req,res)=>{
    try{
        let data=await pm.find({"cat":req.params.cat,"acept":"true"})
        res.json(data)
    }
    catch(err)
    {
        res.json({"msg":"error in fetching data"})
    }

}
let getdonebyme=async(req,res)=>{
    try{
        let data=await pm.find({"uid":req.params.uid})
        res.json(data)
    }
    catch(err)
    {
        res.json({"msg":"error in fetching data"})
    }


}
let delpost=async(req,res)=>{
    try{
        await pm.findByIdAndDelete({"_id":req.params.pid})
        res.json({"msg":"del done"})

    }
    catch(err)
    {
        res.json({"msg":"error in del"})
    }
}
let upd=async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.body._id},{...req.body,"acept":"false"})
res.json({"msg":"upd done"})
    }
    catch(err)
    {
        res.json({"msg":"error in upd"})
    }
}
let getrposts=async(req,res)=>{
    try{
     let data=await pm.find({"acept":"false"})
     res.json(data)

    }
    catch(err)
    {
        res.json({"msg":"error in getting"})
    }

}
let accept=async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.params.pid},{"acept":"true"})
        res.json({"msg":"accepted"})
    }
    catch(err)
    {

    }

}
let updrv=async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({
            "_id":req.body._id
        },{$push:{"comm":req.body.msg},"acept":"rv"})
        res.json({"msg":"done"})

    }
    catch(err)
    {

    }

}
module.exports={addpost,getposts,getbycat,getdonebyme,delpost,upd,getrposts,accept,updrv}