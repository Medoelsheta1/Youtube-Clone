import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';
import classes from './Card.module.css'
const Card = ({imageurl , title , description , channelName , id , channel , channelId}) => {
    
    
    return (

        <div className={classes.card}  >
            <Link to={channel ? `/channel/${id}`  :  `/vidio/${id}`}>
                <img src={imageurl} alt={title} className={channel ? classes.channelImg : null} />
            </Link>
            
            <div className={classes['card-text']} style={channel && {margin: '0' , textAlign: 'center' , marginTop: '20px'}}>
                {!channel && <p>{description}</p>}
                <Link to={ `/channel/${channelId}`} className={channel ? classes.channelLink : null}> 
                {channelName} 
                <VerifiedIcon />
                </Link>
            </div>
        </div>
    )
}

export default Card