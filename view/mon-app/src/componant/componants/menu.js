import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SegmentIcon from '@mui/icons-material/Segment';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PolicyIcon from '@mui/icons-material/Policy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

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
          <ListItem button key='My Notes'>
            <ListItemIcon>
            <NoteAltIcon />
            </ListItemIcon>
            <ListItemText primary='My Notes' />
          </ListItem>
          <ListItem button key="Songs" >
            <ListItemIcon>
              <MusicNoteIcon/>
            </ListItemIcon>
            <ListItemText primary="Songs" />
          </ListItem>
      </List>
      <Divider />
      <List>
           <ListItem button key="Contact Us" >
            <ListItemIcon>
              <EmailSharpIcon/>
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
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
            <MenuIcon />
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
