import classes from './SidePar.module.css'
import {Categories} from './Icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SubscribeActions } from '../RTK/Slices/Subscribtion'
import { Link } from 'react-router-dom'
function SidePar (props) {
    const state = useSelector(state => state.Subscibe)
    const dispatch = useDispatch()
    return (
        <div className={classes.sidePar}>
            <ul>
                {Categories.MainCategory.map((category) => {
                    return <li style={props.selectedCategory === category.name ? {backgroundColor: 'red'} : null} key={category.name}
                        onClick={() => {props.setSelectedCategory(category.name)}}>
                        {category.icon} {category.name}
                        </li>
                })}
                <span></span><br></br>
                <p className={classes.title}>Subscribtions</p>
                <ul className={classes.channels}>
                    {state.map((channel) => {
                    return <div className={classes.subscriptionLinks} key={channel.name} style={{position: 'relative'}} >
                        <li><Link to={`/channel/${channel.channelId}`}>{channel.name} </Link>  </li>                        
                        <span onClick={() => dispatch(SubscribeActions.REMOVE(channel))} className={classes.exit}>x</span>
                    </div>
                    
                })}
                </ul>   
                <h6>Created by Mohamed ELsheta</h6>
            </ul>
        </div>
    )
}
export default SidePar