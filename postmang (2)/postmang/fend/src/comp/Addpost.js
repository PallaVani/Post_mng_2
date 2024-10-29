import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const Addpost = () => {
  let [data,setData]=useState({"title":"","body":"","cat":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let obj
  useEffect(()=>{
    let x=Cookies.get("logincrd")
    if(x==undefined)
    {
navigate("/login")
    }
    else{
       obj=JSON.parse(x)
      setData({...data,"uid":obj._id,"name":obj.name})
    }

  },[])
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    let x=Cookies.get("logincrd")
    let {token}=JSON.parse(x)
    axios.post("http://localhost:5000/addpost",{...data,"dop":new Date()},{"headers":{"Authorization":token}}).then((res)=>{
      setMsg(res.data.msg)
      setData({...data,"title":"","body":"","cat":""})
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter Title' name="title" value={data.title} onChange={fun}/>
        <select onChange={fun} value={data.cat} name="cat">
          <option selected disabled value="">select cat</option>
          <option value="web programming">Web programming</option>
          <option value="programming">Programming</option>
          <option value="ds">Data Science</option>
          <option value="other">Other</option>
        </select>
        <textarea value={data.body} onChange={fun} name='body'>

        </textarea>
        <button onClick={add}>Addpost</button>


      </div>
    </div>
  )
}

export default Addpost