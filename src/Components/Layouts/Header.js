import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import '../../Styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'
function Header() {
  const [mobileOpen,setMobileOpen]=useState(false)

  //handle menu click
  const handleDrawerToggle =() => {
    setMobileOpen(!mobileOpen)

  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        <Typography style={{color:'goldenrod',flexGrow:1, }} sx={{my:2}}>
        <img src={Logo} alt="Logo" height={'70'} width='250' />
            </Typography>
            <Divider />
              <ul className='mobile-navigation'>
              <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
          
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} style={{backgroundColor:'black'}}>
          <Toolbar>
            <IconButton style={{color:'white'}}aria-label='inherit' edge='start'
             sx={{mr:2,display:{sm:'none',}}} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography style={{color:'goldenrod',flexGrow:1}}>
            <img src={Logo} alt="Logo" height={'70'} width='250' />
            </Typography>
            <Box  sx={{display:{xs:"none",sm:"block"}}}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
          sx={{display:{xs:'block',sm:'none'},"% .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px"
          },
            }} >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header