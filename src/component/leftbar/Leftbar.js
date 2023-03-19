 
 
import React from 'react'
import Item from './Item'
 
const Leftbar = () => {
const data= [{name:"Home",img:"./photos/home-page.png",to:"/"},
              
{name:"Profile",img:"./photos/about.png",to:'/profile'},
{name:"Friend",img:"./photos/friend.png" ,to:'/friend'},
{name:"Photos",img:"./photos/gallery.png" ,to:'/photos'}


]
const other=[{name:"Videos",img:"./photos/tv-show.png",to:'/profile'},
             {name:"Blog",img:"./photos/blogger.png",to:'/profile'},
            {name:"Games",img:"./photos/game.webp",to:'/profile'},
            {name:"Subscription",img:"./photos/subscrition.png",to:'/profile'},
            {name:"Logout",img:'./photos/logo.png',to:'/login'}

    ]

  return (
   <div style={{height:'100vh',borderRight:'2px solid black',padding:'20px',backgroundColor:'#E0FBFC'}}>
        
        <Item list={data}/>
        <hr/>
        <Item list={other}/>
          
        
   </div>
  )
}

export default Leftbar