import './story.scss'
 
const Stories = () => {
    const img=[{
        user:'Ritesh',url:'./photos/rahul.jpg'
    },{
        user:'Ritesh',url:'./photos/story6.jpeg'
    },{
        user:'Ritesh',url:'./photos/story5.webp'
    }, 
    {
        user:'Ritesh',url:'./photos/story7.webp'
    },{
        user:'Ritesh',url:'./photos/rahul.jpg'
    } ]
  return (
     
        <div  className='paper'>
             <div className='container'>
               <img src='./photos/fb.jpg' alt='user' />
                <span>Your story</span>
              </div>
            
          { img.map((item)=>
              <>
              <div className='container'>
               <img src={item.url} alt={item.user }  />
                <span>{item.user}</span>
              </div>
              </>
            )
        }
        </div>
     
  )
}

export default Stories