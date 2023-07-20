import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from '../Data/data'
// import { InsertEmoticon } from '@mui/icons-material'
import axios from 'axios'
import swal from 'sweetalert2'

function Menu() {
  const demo=(item)=>{
   // alert("hello")
    const dat={
      //label : item.menu.price,
      // label2 : item.menu.description
      //name : MenuList.item.name
    }
     axios.post('https://food-app-70735-default-rtdb.firebaseio.com/new.json',dat).then(
      swal.fire({
        //title:MenuList.price,
        title : "Thanks Visit Again..!",
        text :  'Item selected successfully',
        icon : 'success'
      })
     )
  }
  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
          MenuList.map((menu) =>(
            <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
              <CardActionArea>
                 
                <CardMedia sx={{minHeight:"400px"}} 
                component={'img'} 
                src={menu.image} 
                alt={menu.name}
                onClick={demo} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    <a href='#' onClick={demo} >{menu.name}</a>
                    
                  </Typography>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.description}
                  </Typography>

                  <Typography variant='h5' gutterBottom component={'div'}>
                     {menu.price}
                  </Typography>

                </CardContent>
              </CardActionArea>
              
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu