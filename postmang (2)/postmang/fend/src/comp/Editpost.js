import React, { useContext, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Editpost = () => {
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let {_id,title,body,cat}=obj.cobj.item
    let [data,setData]=useState({"_id":_id,"title":title,"body":body,"cat":cat})
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
      }
      let upd=()=>{
        axios.put("http://localhost:5000/upd",data).then(()=>{
            navigate("/pdm")

        })

      }
    return (
        <div className='formcon'>
        <div className='form'>
          
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
          <button onClick={upd}>updpost</button>
  
  
        </div>
      </div>
  )
}

export default Editpost