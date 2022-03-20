import React, { Component } from 'react'
import PhotoProfile from './photoProfile';
import Avatar from '@mui/material/Avatar';


class Banner extends Component {
    render() {
        return (
            <section className="container-about">
                <PhotoProfile/>
                
                <div className='label_profile'>UserName UserLastName</div>
                
            </section>
        )
    }
}

export default Banner


/*
<a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
*/