import React from 'react'
import { useEffect , useState } from 'react'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom'
import FetchFromApi from './Fetching/FetchFromApi'
import classes from './VidioDetails.module.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import Vidios from './Vidios/Vidios'
import { useDispatch , useSelector  } from 'react-redux'
import {SubscribeActions} from './RTK/Slices/Subscribtion'
import Comments from './Comments'
function VidioDetails() {
    const navigate = useNavigate()
    const state = useSelector(state => state.Subscibe)
    const {id} = useParams()
    const [vidioDetails , setVidioDetails] = useState(null)
    const [RelatedVidios , setRelatedVidios] = useState([])
    const [RelatedComments , setRelatedComments] = useState([])
    const [showMore , setShowMore] = useState(false)
    let isSubscribe = false
    const dispatch = useDispatch()
    useEffect(()=>{
        FetchFromApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then((data)=>{
            setVidioDetails(data.data.items[0])
        })
        FetchFromApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=20`).then((data)=>{
            setRelatedVidios(data.data.items)
        })
        FetchFromApi(`commentThreads?part=snippet&videoId=${id}&maxResults=20`).then((data)=>{
            setRelatedComments(data.data.items)
        })  
    }, [id])
    const navigateToChannel = () => {
        navigate(`/channel/${vidioDetails.snippet.channelId}`)
    }
    if (!vidioDetails) { 
        return 'Loading'
    }
    if (state.find((element) => element.name ===  vidioDetails.snippet.channelTitle)) {
        isSubscribe = false
    }else {
        isSubscribe = true
    }
    const showMoreHandler = () => {
        setShowMore(!showMore)
    }
    const AddChannelHandler = () => {
        dispatch(SubscribeActions.ADD({
            name: vidioDetails.snippet.channelTitle ,
            channelId:  vidioDetails.snippet.channelId,
            channel: true
        }))
    }
    return (
        <div className={classes.VidioContent}>
            {vidioDetails && <div className={classes.Content}  >
                <div className={classes.vidio}>
                    <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${id}`}
                    width="100%"
                    height="100%" controls    />                    
                </div>

                <div className={classes['vidio-details']}>
                    <h2>{vidioDetails.snippet.title}</h2>
                    <div>
                        <p  onClick={navigateToChannel} >{vidioDetails.snippet.channelTitle}<VerifiedIcon /></p>
                        <button disabled={!isSubscribe}  onClick={AddChannelHandler} className={classes.button}>Subscribe</button>
                    </div>
                </div>
                
                    <div className={classes.statics}>
                        <span>{vidioDetails.statistics.viewCount}&nbsp; Views </span>&nbsp; &nbsp;
                        <span>{vidioDetails.statistics.likeCount} &nbsp;Likes </span>
                    </div>   
                    <div className={classes.description}>
                        <p className={showMore && classes.more}>{vidioDetails.snippet.description} {showMore ? <button onClick={showMoreHandler}>Show less</button> : <button onClick={showMoreHandler}>Show more</button>} </p>
                    </div>
                    {RelatedComments && <Comments comments={RelatedComments.slice(0 , 10)} count={vidioDetails.statistics.commentCount} />}
                    
            </div> }
            <div className={classes.playlist}>
                { RelatedVidios.length > 1 && <Vidios Vidios={RelatedVidios} />                   
                }
            </div>
        </div>
    )
}
export default VidioDetails