import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Logout = () => {
  let navigate=useNavigate()
  let obj=useContext(Ct)
  useEffect(()=>{
    Cookies.remove("logincrd")
    obj.updfun({f:false})
    navigate("/login")

  },[])
  return (
    <div>Logout</div>
  )
}

export default Logout