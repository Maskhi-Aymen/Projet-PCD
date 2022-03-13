import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import pauseicon from '../o.images/Asset_4icon_PCD.png';
import playicon from '../o.images/Asset_3icon_PCD.png';
import previcon from '../o.images/Asset_2gicon_PCD.png';
import nexticon from '../o.images/Asset_2icon_PCD.png';

export default function MusicCard({ singer, song, url, image }) {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation


  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }
  const c = image;

  return (
    <Card sx={{ display: 'flex', maxWidth: 300, maxHeight: 150, borderRadius: 2, border: '1px #9D8189 solid', margin: 'auto', backgroundImage: `url(${image})` }} className="test2">
      <Box sx={{ flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='titleSong'>
            {song}
          </Typography>
          <Typography variant="subtitle1" component="div" className='titleSong'>
            {singer}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={backThirty}>
            {theme.direction === 'rtl' ? <img src={previcon} className='navbaricon' /> : <img src={previcon} className='navbaricon' />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={togglePlayPause}>
            <audio ref={audioPlayer} s src={url} preload="metadata" />
            {isPlaying ? <img src={pauseicon} className='navbaricon' /> : <img src={playicon} className='navbaricon' />}
          </IconButton>
          <IconButton aria-label="next" onClick={forwardThirty}>
            {theme.direction === 'rtl' ? <img src={nexticon} className='navbaricon' /> : <img src={nexticon} className='navbaricon' />}
          </IconButton>
        </Box>
        {/* current time */}
        <div>{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div>
          <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
        </div>

        {/* duration */}
        <div >{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, width: 150 }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
}

/*    
      */