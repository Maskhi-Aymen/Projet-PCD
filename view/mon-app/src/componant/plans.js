import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function WelcomePlan({title,intro,img}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img}
          alt="green iguana"
          sx={{
            margin: 'auto',  flexGrow: 1,	
          }}
        />
        <CardContent sx={{backgroundColor: 'neutral.contrastText', opacity: 0.7, }}>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{backgroundColor: 'neutral.contrastText', opacity: 0.9, }}>
        <Button size="large" color="primary">
          <AddShoppingCartIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
