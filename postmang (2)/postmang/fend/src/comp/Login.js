import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Ct from './Ct'

const Login = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let obj=useContext(Ct)
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let login=()=>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
      if(res.data.token==undefined)
      {
        setMsg(res.data.msg)
      }
      else{
        Cookies.set("logincrd",JSON.stringify(res.data))
        obj.updfun({f:true})
    navigate("/")
       
     
      }

    })

  }

  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter email'onChange={fun} value={data._id} name="_id"/>
        <input type='password' placeholder='enter password'onChange={fun} value={data.pwd} name="pwd"/>
        <button onClick={login}>Login</button>


      </div>

    </div>
  )
}

export default Login