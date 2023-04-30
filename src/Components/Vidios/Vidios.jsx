import React from 'react'
import { ChannelCard, VidioCard} from '../index'
import classes from './Videos.module.css'

const Vidios = ({Vidios}) => {

    return (
        <div className={classes.videos}>
                { Vidios.length > 0 &&  Vidios.map((item , inx) => {
                    if (item.id.videoId) {
                        return <VidioCard vidio={item} key={inx} />
                    }else {
                        return <ChannelCard vidio={item} key={inx} />
                    }
                })}        
            </div>                
    )
}

export default Vidios