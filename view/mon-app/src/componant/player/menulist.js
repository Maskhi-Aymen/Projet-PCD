import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MusicCard from './cardplayer';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

export default function MusicList({ handleSong }) {
    const [dense, setDense] = React.useState(false);

    return (
       < div className='containerMusic'>

                        {datas.filter((val) => {
                            return val.song.toLowerCase();
                        }).map((val, key) => {
                            return (<div key='val.id' >
                                <MusicCard  singer={val.singer} song={val.song} url={val.type} image={val.img}    />


                            </div>)
                        })}
        </div>
    );
}

const datas = [
    { id: 1, singer: "adel", rating: "2", song: "Hello", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/niwel-takayama/Niwel-Takayama.mp3",img:'https://cdn4.vectorstock.com/i/1000x1000/30/53/colorful-music-background-vector-19343053.jpg'},
    { id: 2, singer: "eminem", rating: "1", song: "pluie", type: "https://img.pikbest.com/houzi/audio/original/2020/09/27/09ad111ed57da784e236cd8214669499.mp3", img:"https://img.freepik.com/vecteurs-libre/chute-pluie-tombe-illustration-vectorielle-realiste_1284-30899.jpg"},
    { id: 3, singer: "snoop", rating: "2", song: "vent", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/aeroheadcallingout/Aerohead_CallingOut.mp3", img:"https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-wind-icon-png-image_966321.jpg"},
    { id: 11, singer: "Om Kolyhoum", rating: "3", song: "Hello", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/niwel-takayama/Niwel-Takayama.mp3", img:"http://cdn.wallpaperinhd.net/wp-content/uploads/2018/11/02/Music-Background-Wallpaper-058.jpg"},
    { id: 12, singer: "Klay", rating: "4", song: "buy", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/kai-engel-maree/KaiEngel-Maree.mp3", img:"https://media.istockphoto.com/vectors/music-background-vector-id1076840920?k=20&m=1076840920&s=612x612&w=0&h=7npgZI1DyLkiejEZM19R0XHWdgJGijuTK4cXZvIA72Q="},
    { id: 13, singer: "Chabi", rating: "2", song: "hi", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/aeroheadcallingout/Aerohead_CallingOut.mp3", img:"https://media.gettyimages.com/vectors/music-background-design-vector-id167301212"},
    { id: 21, singer: "Pitbul", rating: "3", song: "Hello", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/niwel-takayama/Niwel-Takayama.mp3", img:"https://static.vecteezy.com/system/resources/thumbnails/000/539/319/small/Musical_seamless_pattern_3.jpg"},
    { id: 22, singer: "Riahanna", rating: "1", song: "buy", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/kai-engel-maree/KaiEngel-Maree.mp3", img:"https://cdn3.vectorstock.com/i/1000x1000/48/27/music-background-with-notes-and-text-space-vector-27044827.jpg"},
    { id: 23, singer: "Gims", rating: "4", song: "hi", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/aeroheadcallingout/Aerohead_CallingOut.mp3", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vpnfaJpjZ-t64M2N4VhSLQhbgs6u8wCdyA&usqp=CAU"},
    { id: 101, singer: "Om Kolyhoum", rating: "3", song: "Hello", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/niwel-takayama/Niwel-Takayama.mp3", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1X47cQPvzpebeOE4O5bxG-t8_p9LU3cMOtg&usqp=CAU"},
    { id: 120, singer: "Klay", rating: "4", song: "buy", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/kai-engel-maree/KaiEngel-Maree.mp3", img:"https://t3.ftcdn.net/jpg/02/97/09/00/360_F_297090054_BtUfnc9J7J3GVsUA7cYnjboZB5NDH8zI.jpg"},
    { id: 130, singer: "Chabi", rating: "2", song: "hi", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/aeroheadcallingout/Aerohead_CallingOut.mp3", img:"https://t4.ftcdn.net/jpg/03/20/56/77/360_F_320567729_aIbFC4DPHx56oEx1ZtqubZx9o3v5Ldfl.jpg"},
    { id: 210, singer: "Pitbul", rating: "3", song: "Hello", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/niwel-takayama/Niwel-Takayama.mp3", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4MppsmbKafS-XDIvin_SSCKqmmeaR-RSMg&usqp=CAU"},
    { id: 220, singer: "Riahanna", rating: "1", song: "buy", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/kai-engel-maree/KaiEngel-Maree.mp3", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed-anav3uAL_IbyAVvriAddGZiMOB7owEOA&usqp=CAU"},
    { id: 230, singer: "Gims", rating: "4", song: "hi", type: "https://www.auboutdufil.com/get.php?fla=https://archive.org/download/aeroheadcallingout/Aerohead_CallingOut.mp3", img:"https://www.bensound.com/bensound-img/happyrock.jpg"},

];