import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp....</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <CommentIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Post
