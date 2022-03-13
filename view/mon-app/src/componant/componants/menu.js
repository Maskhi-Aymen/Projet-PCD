import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SegmentIcon from '@mui/icons-material/Segment';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import PolicyIcon from '@mui/icons-material/Policy';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import menuicon from '../o.images/Asset_1icon_PCD.png';
import FlagIcon from '@mui/icons-material/Flag';
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
var anchor='left';
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link to={"/user/home"}>
          <ListItem button key='Home'>
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
      <Link to={"/user/Profile"}>
          <ListItem button key='Profile'>
            <ListItemIcon>
            <AccountCircleSharpIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
          </Link>
          <ListItem button key="My Account" >
            <ListItemIcon>
              <ManageAccountsSharpIcon/>
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
          <ListItem button key="My Goals" >
            <ListItemIcon>
              <FlagIcon/>
            </ListItemIcon>
            <ListItemText primary="My Goals" />
          </ListItem>
      </List>
      <Divider />
      <List>
      <Link to={"/user/contact"}>
           <ListItem button key="Contact Us" >
            <ListItemIcon>
              <EmailSharpIcon/>
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
          </Link>
          <ListItem button key="General Conditions" >
            <ListItemIcon>
              <SegmentIcon/>
            </ListItemIcon>
            <ListItemText primary="General Conditions" />
          </ListItem>
          <ListItem button key="Privacy Policy" >
            <ListItemIcon>
              <PolicyIcon/>
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>

      </List>
      <Divider />
      <List>
      <ListItem button key="Log Out" >
            <ListItemIcon>
              <LogoutSharpIcon sx={{color:'#F4ACB7'}}/>
            </ListItemIcon>
            <ListItemText primary="Log Out" sx={{color:'#F4ACB7'}} />
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }} onClick={toggleDrawer(anchor, true)}
          >
            <img src={menuicon} className='navbaricon' />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
