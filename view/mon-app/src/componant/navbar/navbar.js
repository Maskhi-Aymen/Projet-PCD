import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SwipeableTemporaryDrawer from '../componants/menu.js'
import LabelBottomNavigation from '../componants/BoutonNavigation';
import NavbarNotification from './notification.js';
import paramicon from '../o.images/Asset_12icon_PCD.png';
const theme = createTheme({
  status: {
    danger: '#fffff',
  },
  palette: {
    primary: {
      main: '#F4ACB7',
      darker: '#053e85',
    },
    neutral: {
      main: '#9D8189',
      contrastText: '#D8E2DC',
    },
  },
});




export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
 

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Box sx={{ flexGrow: 1 ,opacity:'0.8' ,   position: 'sticky',flex:'auto',margin:'auto',maxWidth:'19%',borderRadius:22,
    top:10, zIndex:0}}><NavbarNotification/></Box>
  );

  return (
    <ThemeProvider theme={theme}>
       
    <Box sx={{ flexGrow: 1 ,opacity:'0.8' ,   position: 'sticky',flex:'auto',margin:'auto',maxWidth:'99%',borderRadius:22,
    top:10, zIndex:1}}>
      <AppBar position="static">
        <Toolbar>
         <SwipeableTemporaryDrawer/>
          <Typography
            variant="h6"
            noWrap  ml={10}
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Chillin'
          </Typography>

          <LabelBottomNavigation/>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavbarNotification/>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
   
          </Box>
        </Toolbar>
      </AppBar>
      
    
    </Box>
    </ThemeProvider> 
  );
}

/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>         <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
           
            </IconButton>*/