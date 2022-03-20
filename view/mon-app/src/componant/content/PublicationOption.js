import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import notificationicon from '../o.images/Asset_7icon_PCD.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReportIcon from '@mui/icons-material/Report';

export default function PublicationOption() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton variant="contained" {...bindTrigger(popupState)}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Typography sx={{ p: 2 }}>
              <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add to Favorites" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ReportIcon />
                    </ListItemIcon>
                    <ListItemText  primary="Report the Post" />
                  </ListItemButton>
                </ListItem>
              </List>



            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

