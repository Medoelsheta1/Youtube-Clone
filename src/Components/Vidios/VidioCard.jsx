import  Card from './Card'
import React from 'react'
import {demoThumbnailUrl} from '../index'
const VidioCard = ({vidio}) => {
    return (
        // imageurl={} title={} description={} channelName={}
        <Card channelName={vidio?.snippet?.channelTitle} description={vidio?.snippet?.title.slice(0 , 60)} 
        imageurl={vidio?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} id={vidio.id.videoId}
        title={vidio?.snippet?.title} channelId={vidio.snippet.channelId} />
    )
}

export default VidioCard