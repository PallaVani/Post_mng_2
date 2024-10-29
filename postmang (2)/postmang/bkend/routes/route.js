let express=require("express")
const { adduser, login,islogin } = require("../controlers/usercon")
const { addpost, getposts, getbycat, getdonebyme, delpost, upd, getrposts, accept, updrv } = require("../controlers/postcont")
let route=new express.Router()
route.post("/adduser",adduser)
route.post("/login",login)


route.post("/addpost",addpost)
route.get("/get",getposts)
route.get("/getbycat/:cat",getbycat)
route.get("/getdonebyme/:uid",getdonebyme)
route.delete("/delpost/:pid",delpost)
route.put("/upd",upd)
route.get("/getrposts",getrposts)
route.get("/accept/:pid",accept)
route.put("/updrv",updrv)
module.exports=route