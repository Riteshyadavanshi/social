 
import { Stack } from '@mui/system'
import React, { Suspense } from 'react'
 
import Post from './Post/Post'
import Stories from './Stories/Stories'

const Home = () => {
   
  return (
     
    <>
     <Stack direction='column' sx={{backgroundColor:'#CAD2C5',padding:'50px',overflowX:"hidden",height:'100vh'}}>
               <Suspense fallback={<h1>loading...</h1>}><Stories/></Suspense> 
                <Post/>
                 
     </Stack>
     
    </>
  )
}

export default Home