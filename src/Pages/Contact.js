import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  return (
    <Layout>
        <Box sx={{my:7,ml:10,"& h4":{fontWeight:'bold',mb:2}}}>
         <Typography variant='h4'>Contacct My Resturant</Typography>
         <p>
         A restaurant is a business that prepares and serves food and drinks to customers.
         Meals are generally served and eaten on the premises, 
         but many restaurants also offer take-out and food delivery services. 
         Restaurants vary greatly in appearance and offerings, 
         including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, 
         to high-priced luxury establishments.
         </p>
        </Box>
        <Box sx={{m:5,width:"600px",ml:10,"@media (max-width:600px)":{
          width:"300px"
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
               <TableRow>
                 <TableCell sx={{bgcolor:'black',color:'white'}}align='center'>Contact Details</TableCell>
              </TableRow> 
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'goldenrod',pt:1}}/>1234567890(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{color:'goldenrod',pt:1}}/>contact.sanjay@tech.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{color:'goldenrod',pt:1}}/>8686007288
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>

          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact