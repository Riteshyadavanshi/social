

import  './register.scss'
 
import {    useEffect, useState } from 'react'
 
const Register = () => {
  const [data,setdata]=useState({
    firstname:'',
    lastname:'',
     password :'',
    email:''

  })
 
  const[err,seterr]=useState(false)
  const[success,setSuccess]=useState(false)
 
  /*------------handle input */

  const handleInput=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   
  } 
   
  // const{firstname,lastname,email,password}=data

  /*----------Registration-------------*/
  const registeration=async()=>{
   
     if(data.email.length===0||data.password.length===0||data.lastname.length===0||data.firstname.length===0){
          return  seterr(true)   
     }
     else{
      
   
       try{
   
            await fetch('http://localhost:4500/register',
             {
              method:"POST",
              headers:{
                "Accept":"application/json",
                "Content-Type":"applcation/json"
              },

              body:JSON.stringify({
                 firstname:data.firstname,
                 lastname:data.lastname,
                 email:data.email,
                 password:data.password,
    

              })
            } 
         )
          setSuccess(true)
          }catch(err){
                alert( err)
          }
         
        }
    
   }
 
 useEffect(()=>{
  if(data.email.length>0&&data.password.length>0&&data.lastname.length>0&&data.firstname.length>0){
    seterr(false)   
}
 },[data.email,data.password,data.firstname,data.lastname])

 
   
 
  
  return ( 
    <div className='register'>
            <div className='form'>
             <div className='left'>
                <h1>welcome</h1>
                <p>lorem</p>
             </div>
             <div className='right'>
              <h1>Register</h1>
              <input type='text' value={data.firstname} name="firstname" onChange={handleInput} placeholder='first name'/>
              
              <input type='text' value={data.lastname}  name="lastname" onChange={handleInput} placeholder='last name'/>
              
              <input type='password' value={data.number}  name="password"  onChange={handleInput} placeholder=' password'/>
              
              <input type='email'  value={data.email} name="email" onChange={handleInput} placeholder='Email@example.com'/>
              {
                err&&<p style={{color:"red"}}>please fill all the details</p>
              }
             
              <button onClick={registeration} > Register</button> 
              {
                success&&<p style={{color:"green"}}>registeration successfull</p>
              }
             </div>
             </div>
      </div>
  )
}

export default Register