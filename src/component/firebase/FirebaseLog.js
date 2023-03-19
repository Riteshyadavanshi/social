import React, { useState } from 'react'
import{signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

import {auth} from'./app'
 
 
const FirebaseLog = () => {
  const email='riteshyadav@gmail.com'
  const password="123ritesh"
  const provider= new GoogleAuthProvider()
 
const[user,setUser]=useState({})
const [token,settoken]=useState('')
  
  const signin=()=>signInWithEmailAndPassword(auth,email, password).then(res=>setUser(res.user))
  const register=()=>createUserWithEmailAndPassword(auth, email,password)
  const SignOut= ()=>{
    signOut(auth).then(res=>setUser(res))
    
  
  }
  const singwithgoogle=()=>{
    signInWithPopup(auth,provider).then(res=>{
      const cred=  GoogleAuthProvider.credentialFromResult(res)
      const token=cred.accessToken
      settoken(token)

    })
  }
  return (
    <> 
     <button  onClick={signin}>signin</button>
     <button onClick={register}>resiter </button>
     <button onClick={SignOut}>signout </button>
     <button onClick={singwithgoogle}>signout </button>
   
     {
      user?.email
     }
     {
      token
     }
     </>
  )
}

export default FirebaseLog