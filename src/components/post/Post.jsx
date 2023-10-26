import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Users} from '../../DummyData'
export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className="pwrapper">
        <div className="ptop">
          <div className="ptleft">
            <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className="ptlpic" />
            <span className="pname">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
            <span className="pdate">{post.date}</span>
          </div>
          <div className="ptright">
            <MoreVertIcon/>

          </div>
        </div>
        <div className="pcenter">
          <span className="ptext">{post.desc}</span>
          <img src={post.photo} alt="" className="pimg" />
        </div>
        <div className="pbottom">
          <div className="pbleft">
            {/* <img src="/Assets/like.jpg" alt="" className="licon" />
            <img src="/Assets/heart.jpg" alt="" className="hicon" /> */}
            <ThumbUpIcon className='licon' onClick={likeHandler}/>
            <FavoriteIcon className='hicon'onClick={likeHandler}/>
            <span className="plcounter">{like} people react to it</span>
          </div>
          <div className="pbright">
             <ModeCommentIcon className='cicon'/>
            <span className="pcomment">{post.comment} people comment</span>
          </div>

        </div>
      </div>

    </div>
  )
}
