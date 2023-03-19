import React from 'react'
import './navbar.scss'
import HomeIcon from '@mui/icons-material/Home'
 import DarkModeIcon from '@mui/icons-material/DarkMode'
 import NotificationsIcon from '@mui/icons-material/Notifications'
 import SearchIcon from '@mui/icons-material/Search'
 import { Paper,Avatar  } from '@mui/material'
  import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
     <>
      <div className='nav'>
        <div className='left-nav'>
             <Link to='/'> Social-Media </Link>
               <HomeIcon  sx={{color:'pink'}}/>
               <DarkModeIcon/>
               <NotificationsIcon/>
               <Paper sx={{padding:'10px',display:'flex',alignItems:'center'}}>
                <input type='text'/><SearchIcon/>
                 </Paper>
        </div>
        <div className='right-nav'>
              <Avatar/>user name
        </div>
      </div>
     <hr/>
     </>

  )
}

export default Navbar