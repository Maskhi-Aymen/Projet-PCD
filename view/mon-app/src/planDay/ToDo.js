import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const Todo = ({id,pack,date,hour,title,description,imageUrl,time }) => {
 

  return(
    <Card sx={{ Width: "99%", Height: 250, borderRadius: 2, border: '1px #9D8189 solid', }} className="todo-row">
        <CardMedia
      component="img"
      sx={{ width: "100%", width: "20%"}}
      image={imageUrl}
      alt="Live from space album cover"
    />                
    <CardContent sx={{ }}>
        <Typography component="div" variant="h2" className='titlePlan'>
          {title}
        </Typography>
           <Typography variant="subtitle1" component="div" className='titlesoustitre'>
          {description}
        </Typography>
      </CardContent>
    <Box sx={{ }}>
    <Typography component="div" variant="h5" className='titlesoustitre'>
          {time}
        </Typography>
      <Box sx={{  alignItems: 'center', pl: 1, pb: 1 }}>  
 <Typography component="div" variant="h5" className='titlePlan'>
    {hour}
  </Typography>
      </Box>
    </Box>

  </Card>
  );
};

export default Todo;


/**
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

 */