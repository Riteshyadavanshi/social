

import React, { useState  } from 'react'
import {  Link  ,useNavigate } from 'react-router-dom'
 
import './login.scss'
const Login = () => {
    const [name,setname]=useState();
   
    const [password,setpassword]=useState();
     const navigate=useNavigate()
    const loggin=async(e)=>{
      e.preventDefault();
         try{
       await fetch('http://localhost:4500/signup',{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",

        },
        body:JSON.stringify({
        password,name
        })
       })
      
       navigate('/')
      
      
      }catch(err){
        alert(" con't loggin")
      }
         
       
    }
      
    
    
  return (
    <>
      <div className='login'>
          <form  >
            <div className='form'>
             <div className='left'>
                <h1>welcome</h1>
                <p>lorem</p>
             </div>
             <div className='right'>
              <h1>Login</h1>
              <input type='text' value={name} onChange={(e)=>setname(e.target.value)}placeholder='username'/>
              <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)}placeholder='password'/>
              
               <Link  >
              <button type='submit'onClick={loggin} >Login</button> 
              </Link>
             </div>
             </div></form>
      </  div>
    
    
    </>
  )
}

export default Login