import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Reg = () => {
  let [data,setData]=useState({"_id":"","name":"","pwd":"","phno":""})
  let navigate=useNavigate()
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/adduser",data).then((res)=>{
      if(res.data.msg=="reg done")
      {
        navigate("/login")
      }
      else{
setMsg(res.data.msg)
      }

    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' name="_id" placeholder='enter email' onChange={fun} value={data._id}/>
        <input type='text' name="name" placeholder='enter name' onChange={fun} value={data.name}/>
        <input type='password' name="pwd" placeholder='enter pwd' onChange={fun} value={data.pwd}/>
        <input type='text' name="phno" placeholder='enter phno' onChange={fun} value={data.phno}/>
        <button onClick={add}>Register</button>
        
      </div>
    </div>
  )
}

export default Reg