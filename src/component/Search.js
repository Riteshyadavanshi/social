

import React, { useState,useEffect ,useRef } from 'react'
import { IconButton, InputBase,Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
 
const Search = () => {

  const[isloading,SetIsloading]=useState(false)
  const inputBox=useRef()
  const [input,setInput]=useState('');

    useEffect(()=>{
      if(input.length===0){
         return SetIsloading(true)
      }
      
      SetIsloading(false)
        
    },[input])
  useEffect(()=>{
    inputBox.current.focus()
  },[])
  const handleClick=()=>{
    SetIsloading(prev=>!prev)
  }

  return (
    <>
    <Box sx={{backgroundColor:'lightgray',width:"100wh",height:"100vh",display:'block',alignItem:'center',justifyContent:'center',padding:' 200px'}}>
        <Box sx={{display:'block',alignItems:"center",width:'500px',height:'500px',backgroundColor:'white',}}>
        <InputBase ref={inputBox}onChange={(e)=>setInput(e.target.value)}placeholder='Enter the City name'/><IconButton onClick={handleClick}><SearchIcon /> </IconButton>
           
          <Box sx={{m:'30px'}}>
           
              {
              isloading?( <> 
                         <Typography variant='h3' sx={{fontSize:"20px"}}>country:{input}</Typography>
                          <Typography variant='h3'sx={{fontSize:"20px"}}>population:</Typography>
                      </>
        ): <h4>Loading.......</h4> } 
    </Box> 
    </ Box>
    
    </Box></>
  )
}

export default Search