import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img  className="postProfileImg" src="/assets/person/1.jpg"/>
                    <span className="postUserName">John Hanna</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post <SentimentSatisfiedAltIcon/>
                </span>
                <img src="/assets/post/1.jpg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt=""/>
                    <img className="likeIcon" src="assets/heart.png" alt=""/>
                    <span className="postlikeCounter"> 57 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> 12 comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
