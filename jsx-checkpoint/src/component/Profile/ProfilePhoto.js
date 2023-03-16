import React from 'react'
import photo from './photo.jpg.jpg'
import './style.css';


const ProfilePhoto = ()=> {       
    return(
        <div className="grid-item">
            <img src={photo}/>
           
        </div>
        
    )
}

export default ProfilePhoto