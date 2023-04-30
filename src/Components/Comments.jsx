import React from 'react'
import classes from './Comments.module.css'
function Comments(props) {
    return (
        <div className={classes.comments}>
                        <h4>{props.count} Comments: </h4>
                        <ul className={classes.AllComments}>
                            {props.comments.map((comment) => {                                
                                return (
                                    <li>
                                        <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='userImg' />
                                        <div className={classes.commentText}>
                                            <span>{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                                            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                            </div>
                                    </li>                                    
                                )
                            })}
                        </ul>
        </div>
    )
}

export default Comments