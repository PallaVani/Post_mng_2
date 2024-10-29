import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Ct from './Ct'
const Pdm = () => {
  let [data,setData]=useState([])
  let [dl,setdl]=useState(true)
  let navigate=useNavigate()
  let obj=useContext(Ct)
  useEffect(()=>{
    let x=Cookies.get("logincrd")
    if(x==undefined)
    {
navigate("/login")
    }
    else{
      x=JSON.parse(x)
    axios.get(`http://localhost:5000/getdonebyme/${x._id}`).then((res)=>{
      setData(res.data)
    }).catch((err)=>{

    })
  }

  },[dl])
  let del=(pid)=>{
    axios.delete(`http://localhost:5000/delpost/${pid}`).then((res)=>{
      setdl(!dl)
      

    })
  }
  let edit=(item)=>{
    obj.updfun({"item":item})
    navigate("/edit")

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
                <p>{item.acept=='true'?"Approved":"pending"}</p>
                </div>
                <button onClick={()=>del(item._id)}>Delete Post</button>
                <button onClick={()=>edit(item)}>Editpost</button>
                <div>
                {
                  item.comm.toString()
                }</div>
              </div>
          )
        })
      }
    </div>
  )
}

export default Pdm