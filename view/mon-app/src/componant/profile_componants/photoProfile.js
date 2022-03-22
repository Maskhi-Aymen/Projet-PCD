import React from 'react';
import '../styles/profile.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import { useEffect,useState } from 'react';
import Changephoto from './changephoto';
import axios from 'axios';

export default function PhotoProfile() {
	const [datas,setdatas]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(async ()=>{
		if(!isLoaded){
		   console.log("loaded")
		   const { data } =  await axios.patch(`http://localhost:8000/user/11`);
			setdatas(data)
		 
		}
    })


	const imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ profileImg: reader.result })
			}
		}
		reader.readAsDataURL(e.target.files[0])
	}
	return (
		<div className="PagePhotoProfile">
			<div className="ContainerPhotoProfile">
				<div >
					
					<Changephoto  avatar={datas["user_avatar"]}/>
				</div>
			</div>
		</div>
	);

}

