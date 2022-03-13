import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import AudioPlayer from '../componant/componants/AudioPlayer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InteractiveList from '../componant/componants/listSong'
import Container from '@mui/material/Container';


const theme = createTheme({
  status: {
    danger: '#fffff',
  },
  palette: {
    primary: {
      main: '#9D8189',
      darker: '#fffff00',
    },
    neutral: {
      main: '#F4ACB7',
      contrastText: '#ffffff00',
    },
  },
});

export default function SongsPage() {
  const [PlaySong, setPlaySong] = useState('');
  const [isPlaySong, setisPlaySong] = useState(false);
  const handlePlaySong = (e) => {
    setisPlaySong(true);
    setPlaySong(e);
  };

  return (
    <ThemeProvider theme={theme} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        mt={1} 
        sx={{
           height:800,
          backgroundColor: 'neutral.contrastText', opacity: 0.7, 
        }}
      >
     
          <InteractiveList handleSong={handlePlaySong} />
      </Box>
      <Box
        mb={20}
        sx={{
          margin: 'auto',  flexGrow: 1,
          backgroundColor: 'neutral.contrastText', opacity: 0.7,
        }}
      ><Container 

        sx={{
          flex:1,
          backgroundColor: 'neutral.contrastText', opacity: 0.7,
        }}>
        <AudioPlayer SongURL={PlaySong} />
      </Container>
     </Box>
    </ThemeProvider>
  );
}
/* 
border: '2px solid black',

      */