import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import Ct from './Ct'
const Home = () => {
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
    <div className='home'>
        <div className='submenu'>
            <Link to="/">Allposts</Link>
            <Link to="/wp">Web Programming</Link>
            <Link to="/pm">Programming</Link>
            <Link to="/ds">Data Science</Link>
            <Link to="/other">Otherposts</Link>
         { crd.token!=""&&<Link to="/pdm">My Posts</Link>}

        </div>
        <div className='cont'>
            
            <Outlet/>

        </div>
        

    </div>
  )
}

export default Home