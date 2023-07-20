import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return(
    <>
      <Box sx={{textAlign:'center',bgcolor:'gray',color:'white',p:1}}>
        <Box sx={{my:3, "& svg":{
            fontSize:"50px",
            cursor:"pointer",
            mr:2 },
            "& svg:hover":{
                color:"goldenrod",
                transform:"translateX(10px)",
                translate:"all 400ms"
            }

        }}>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>

        </Box>
        <Typography variant='h6' sx={{"@media (max-width:600px)":{
            fontSize:"1rem",
        }}}>
            All Rights Reserved &copy; Sanjay Kumar
        </Typography>
      </Box>
    </>
  )
}

export default Footer