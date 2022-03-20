import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import MusicCard from '../player/cardplayer';
import PublicationOption from './PublicationOption';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
      color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
      color: '#ff3d47',
  },
});
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Article({ type, auteur, url, image, datepub, avatar, description, moreinfo, note }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='containerPublication' sx={{ borderRadius: '29px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <PublicationOption />
          </IconButton>
        }
        title={auteur}
        subheader={datepub}
      />
      {(type == "vedio") ? <iframe width="300" height="200" src={url}></iframe> : <></>}
      {(type == "image") ? <CardMedia component="img" height="400" width="300" image={url} alt={type} /> : <></>}
      {(type == "text") ? <Typography variant="body2" color="text.secondary">{moreinfo}</Typography> : <></>}
      {(type == "audio") ? <MusicCard url={url} song="Song" singer="unknown" image={image} /> : <></>}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <StyledRating
          name="customized-color"
          defaultValue="2"
          getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />{(moreinfo === "") ?   <></>:
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>}
      </CardActions>
      {(moreinfo === "") ?   <></>:
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {moreinfo}
          </Typography>
        </CardContent>
      </Collapse>}
    </Card>
  );
}
