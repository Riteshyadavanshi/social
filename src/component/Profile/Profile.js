import {  Stack,Box ,Paper} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Post from '../Post/Post'
  import {Link} from 'react-router-dom'
import React from 'react'

  const Profile = () => {
  return (
    <>
    <Stack sx={{overflowX:'hidden',height:'100vh',padding:'15px'}} >
           <Box sx={{display:'flex',flexDirection:'row'}}>
            <img src='./photos/rahul.jpg' alt='background' width='100%' height='300px'/>
           </Box>
           <Box sx={{display:'flex',alignItem:'center',justifyContent:'center',marginTop:'-100px',left:'50%',zIndex:'34'}}>
             <Link to='/'><img src='./photos/fb.jpg' alt='profile' style={{borderRadius:'50%',width:'200px'}}/></Link>
           </Box>
           <Box>
            <Paper sx={{displey:'flex',justifyContent:'space-between',marginTop:'-10px',padding:'30px',backgroundColor:'lightpink'}}>
               <div style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                  <TwitterIcon/>
                  <InstagramIcon/>
                  <FacebookIcon/>   
               </div>
               <div style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                 <h4>Ritesh yadav</h4>
               </div >
               <div style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                 <p>I am a Student of Guru Nanak College<br/>I am a Self Learning Person</p>
               </div>
            </Paper>
           </Box>
           <div style={{marginTop:'30px',backgroundColor:'#168AAD',padding:'30px'}}><Post/></div>
    </Stack>
    
    
    
    </>
  )
}
export default Profile
