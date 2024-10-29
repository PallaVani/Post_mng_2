import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const Admin = () => {
  let [sv,setsv]=useState(true)
  let [data,setData]=useState([])
  let navigate=useNavigate()
  let [cm,setcm]=useState("")
  let fun=(e)=>{
    setcm(e.target.value)
  }
  
  useEffect(()=>{
    let x=Cookies.get("logincrd")
    if(x==undefined)
    {
navigate("/login")
    }
    else{
      x=JSON.parse(x)
      axios.get("http://localhost:5000/getrposts",{"headers":{"Authorization":x.token}}).then((res)=>{
        setData(res.data)
      })
    
  }

  },[sv])
  let act=(pid)=>{
    let x=Cookies.get("logincrd")
    let {token}=JSON.parse(x)
    axios.get(`http://localhost:5000/accept/${pid}`,{"headers":{"Authorization":token}}).then(()=>{
      setsv(!sv)
    })
  }
let addcom=(pid)=>{
  let x=Cookies.get("logincrd")
    let {token}=JSON.parse(x)
  axios.put("http://localhost:5000/updrv",{"_id":pid,"msg":cm},{"headers":{"Authorization":token}}).then(()=>{
    setsv(!sv)
  })
}
  return (
    <div className='postcon'>
    {
      data.map((item)=>{
        return(
          <div className='post'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <div className='pfoot'>
              <p>{item.cat}</p>
              <p>{new Date(item.dop).toDateString()}</p>
              <p>{item.name}</p>
              </div>
              <div>
                {
                  item.comm.toString()
                }</div>
                <button onClick={()=>act(item._id)}>Accept</button>
                <input type='text' placeholder='enter comment' onChange={fun} value={cm}/>
                <button onClick={()=>addcom(item._id)}>Addcomment</button>
            </div>
        )
      })
    }
  </div>
  )
}

export default Admin