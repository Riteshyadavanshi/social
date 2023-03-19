import { Avatar, IconButton, Paper } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import FavoriteIcon from '@mui/icons-material/Favorite'

import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import SendIcon from '@mui/icons-material/Send'

import AttachFileIcon from '@mui/icons-material/AttachFile';

import './post.scss'

import { useEffect, useState } from 'react'
import {redirect }from 'react-router-dom'
const post = [{ user: "Satish", img: './photos/satish.jpg', postMessage: './photos/story5.webp' },
{ user: "Ashish", img: './photos/story6.webp', postMessage: './photos/story6.jpeg' },
{ user: "Rahul", img: './photos/rahul.jpg', postMessage: './photos/rahul.jpg' },
{ user: "Abhishek", img: './photos/story1.avif', postMessage: './photos/story7.webp' },
{ user: "Ranjeet", img: './photos/ranjeet.jpg', postMessage: './photos/story5.webp' }

]

const Post = () => {
  const [like, setlike] = useState(false)
  const [comment, setcomment] = useState(false)
  const [description, setdescription] = useState('')
  const [image, setimage] = useState('')
  const [data,setdata]=useState([])
  // const navigate =useNavigate()


  /*------------------------Post Data------------------------------------*/
  const makePost = async () => {

    await fetch('http://localhost:4500/post', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        description,image
      })
    })
  redirect('/post')
     
  // navigate('/')

  }
  useEffect(()=>{
  
     async function fetchdata(){
       await fetch('http://localhost:4500/allpost').then((res)=>res.json()).then((data)=> setdata( data))
     }
     fetchdata()
  },[data])


  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: "30px" }}>

      <Paper >
        <Avatar />
        <div className='Sendfile'>
          <input type="file" id='photo' value={ image} onChange={(e) => setimage(e.target.value)} /> <IconButton  ><label htmlFor="photo"><AttachFileIcon sx={{ cursor: "pointer" }} /> </label></IconButton>
          <input value={description} onChange={(e) => setdescription(e.target.value)} placeholder='Discription....' />
          <SendIcon onClick={makePost} />

        </div>
      </Paper>
      {
        data?data.map((data,index)=> 
          <ol key={index}>
            <li>{data.description}</li>
            <li  > <img src={data.image} alt="post"/> </li>
          </ol>
        ):<h1>loading...</h1>
      }

      {post.map((post, e) => <Paper className='post' key={e}>
        <div className='header'>
          <div className='left-head' style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={post.img} />
            <p>{post.user}</p>
          </div>
          <MoreVertIcon />
        </div>
        <p>about the post caption</p>
        <div className='img'>
          <img src={post.postMessage} alt="post" />
        </div>
        <div className='footer'>
          <div className='like'>
            {
              like ? <FavoriteIcon onClick={() => setlike(!like)} /> : <FavoriteBorderIcon onClick={() => setlike(!like)} />
            }12 Likes

          </div>
          <div className='comment'>

            <TextsmsOutlinedIcon onClick={() => setcomment(!comment)} /> comment

          </div>
          <div className='share'>
            <ShareOutlinedIcon />share
          </div>

        </div>

        {comment && <div className='styleComent'>
          <div className='Docomment'><Avatar /><input type='text' /><button><SendIcon /></button></div>
          <Paper>
            <div className='commenter'>
              <div>
                <h3><Avatar />username</h3>
              </div>
              <div><p>1 hour ago</p></div>
            </div>
            <p> this is comment</p>
          </Paper>
        </div>}
      </Paper>)}
    </div>
  )
}

export default Post