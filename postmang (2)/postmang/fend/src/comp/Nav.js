import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import Ct from './Ct'

const Nav = () => {
  let [crd,setcrd]=useState({"token":"","role":""})
  let obj=useContext(Ct)
  useEffect(()=>{
    let x=Cookies.get("logincrd")
    if(x!=undefined)
    {
   setcrd(JSON.parse(x))
    }
    else{
      setcrd({"token":"","role":""})
    }

  },[obj.cobj.f])
  return (
    <nav>
        <Link to="/">Home</Link>
      {crd.token==""&& <Link to="/reg">Register</Link>}
      {crd.token==""  &&<Link to="/login">Login</Link>}
      {crd.token!=""  &&<Link to="/addpost">Addpost</Link>}
      {crd.role=="admin"&&  <Link to="/admin">Admin</Link>}
      {crd.token!=""&&  <Link to="/logout">Logout</Link>}
        <div>{crd.name}</div>
    </nav>
  )
}

export default Nav