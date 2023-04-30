import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'    
import FetchFromApi from './Fetching/FetchFromApi' 
import classes from './ChannelDetails.module.css' 
import VerifiedIcon from '@mui/icons-material/Verified';
import Vidios from './Vidios/Vidios';
function ChannelDetails() {
    const {id} = useParams()
    const [ChannelDetails , setChannelDetails] = useState(null)
    const [videos , setVedeos] = useState([])
    useEffect(()=> {
        FetchFromApi(`channels?part=snippet%2Cstatistics&id=${id}`).then((data)=>{
            setChannelDetails(data.data.items[0])
        })

        FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data)=>{
            setVedeos(data.data.items)
        })

    }, [id])
    return (
        <div className={classes.channel}>
            <div className={classes.gradient} />
            { ChannelDetails && <div className={classes.channelDetails}>
                <img src={ChannelDetails.snippet.thumbnails.high.url} alt='there is an img' />  
                <h3>{ChannelDetails.snippet.localized.title} <VerifiedIcon /></h3>
                <p>{ChannelDetails.statistics.subscriberCount} Subscribers </p>
            </div> }
            <div className={classes.vidios}>
                <Vidios Vidios={videos} />
            </div>
        </div>
    )
}

export default ChannelDetails