const um = require("../models/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let adduser=async(req,res)=>{
    try{
        let hash=await bcrypt.hash(req.body.pwd,10)
        let data=new um({...req.body,"pwd":hash})
       await data.save()
        res.json({"msg":"reg done"})

    }
    catch(err)
    {
        res.json({"msg":"error in creating user"})
    }

}
let login=async(req,res)=>{
    try{
        let obj=await um.findById({"_id":req.body._id})
        if(obj)
        {
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f)
            {
                let token=jwt.sign({"_id":obj._id},"abcd")
                res.json({"token":token,"_id":obj._id,"name":obj.name,"role":obj.role})
            }
            else{
                res.json({"msg":"check pwd"})
            }
        }
        else{
            res.json({"msg":"check email"})
        }

    }
    catch(err)
    {
        res.json({"msg":"error in login"})
    }

}
let islogin=(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,"abcd")
        next()

    }
    catch(err)
    {
        res.json({"msg":"plz login"})
    }
}

module.exports={adduser,login,islogin}