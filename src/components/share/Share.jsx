import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
  return (
    <div className='share'>
      <div className="Swrapper">
        <div className="stop">
          <img className="spic" src="/Assets/Persons/1.jpeg" alt="" />
          <input type="text" placeholder="What's in your mind ?" className="sinput" />
        </div>
        <hr className="shr" />
        <div className="sbottom">
          <div className="soptions">
            <div className="soption">
              <PermMediaIcon htmlColor='orange' className='sicon' />
              <span className='stext'>
              Photo or Video
              </span>
              </div>
              <div className="soption">
              <LabelIcon htmlColor='blue 'className='sicon' />
              <span className='stext'>
              Tag
              </span>
              </div>
              <div className="soption">
              <LocationOnIcon htmlColor='green' className='sicon' />
              <span className='stext'>
              Location
              </span>
              </div>
              <div className="soption">
              <EmojiEmotionsIcon htmlColor='gold' className='sicon' />
              <span className='stext'>
              Emoji 
              </span>
              </div>
          </div>
          <button className='sbutton'>Share</button>

        </div>
      </div>
      </div>
  )
}
