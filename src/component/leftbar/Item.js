
import { Avatar  } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'

import './leftbar.scss'
const Item = ({list} ) => {
    
  return (
     
    <>
    {
      list.map((Item,key)=>
      <div key={key}  className='item'> 
      
     <Link  to={Item.to}><Avatar src={Item.img}/><h4>{Item.name} </h4></Link>
      </div>)
    }

    </>



  )
}

export default Item