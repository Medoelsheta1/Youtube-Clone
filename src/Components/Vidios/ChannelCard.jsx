import Card  from './Card'
import React from 'react'

const ChannelCard = ({vidio}) => {
    return (
            <Card channelName={vidio?.snippet?.channelTitle}
            description={vidio?.snippet?.title.slice(0 , 60)} 
            imageurl={vidio?.snippet?.thumbnails?.high?.url }
            id={vidio.id.channelId}
            channelId={vidio.id.channelId}
            title={vidio?.snippet?.title} 
            channel={true}  />        
    )
}

export default ChannelCard