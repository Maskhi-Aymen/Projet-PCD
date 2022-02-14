import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PermMediaTwoToneIcon from '@mui/icons-material/PermMediaTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import homeicon from '../o.images/Asset_8icon_PCD.png';
import contenticon from '../o.images/Asset_14icon_PCD.png'

const theme = createTheme({
    status: {
      danger: '#F4ACB7',
    },
    palette: {
      primary: {
        main: '#FFE5D9',
        darker: '#F4ACB7',
      },
      neutral: {
        main: '#053e85',
        contrastText: '#D8E2DC',
      },
    },
  });
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('welcome');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation  sx={{ width: '80%', backgroundColor: 'primary.darker', color:'neutral.main'}} value={value} onChange={handleChange}>
      <BottomNavigationAction  
        label="Welcome"
        value="welcome"
        icon={<img src={homeicon}  className='navbaricon' ></img>}
      />
      <BottomNavigationAction
        label="My Plans"
        value="myplans"
        icon={<FavoriteBorderIcon />}
      />
      <BottomNavigationAction
        label="Content"
        value="cnoyent"
        icon={<img src={contenticon}  className='navbaricon' ></img>}
      />
    </BottomNavigation></ThemeProvider> 
  );
}
