import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PermMediaTwoToneIcon from '@mui/icons-material/PermMediaTwoTone';
import dateicon from '../o.images/date.png';
import homeicon from '../o.images/Asset_8icon_PCD.png';
import contenticon from '../o.images/Asset_14icon_PCD.png';
import musicicon from '../o.images/icon_PCD.png';
import noteicon from '../o.images/Asset_5icon_PCD.png';
import { Link } from "react-router-dom";

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
    <BottomNavigation  sx={{  backgroundColor: 'primary.darker', color:'neutral.main',}} className='navbotton' value={value} onChange={handleChange}>
    <Link to={"/user/home"}>  
      <BottomNavigationAction  
        label="Home"
        value="Home"
        icon={<img src={homeicon}  className='navbaricon' ></img>}
        
      />
      </Link>
      <Link to={"/user/Todo"}>
      <BottomNavigationAction
        label="My Plan"
        value="My Plan"
        icon={<img src={dateicon}  className='navbaricon' ></img>}
      /></Link>
      <Link to={"/user/media"}>
            <BottomNavigationAction
        label="Media"
        value="Media"
        icon={<img src={musicicon}  className='navbaricon' ></img>}
      /></Link>
      <Link to={"/user/notes"}>
            <BottomNavigationAction
        label="Notes"
        value="notes"
        icon={<img src={noteicon}  className='navbaricon' ></img>}
      /></Link>
    </BottomNavigation></ThemeProvider> 
  );
}
