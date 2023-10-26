import React from 'react'
import "./leftbar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../DummyData';
import Closefriends from '../closefriends/Closefriends';
export default function  Leftbar() {
  return (
    <div className='leftBar'> 
      <div className="lbwrapper">
        <ul className="lblist">
          <li className="lblistitem">
            <RssFeedIcon className='lbicon'/>
            <span className="lblisttext">Feed</span>

          </li>
          <li className="lblistitem">
            <ChatIcon className='lbicon'/>
            <span className="lblisttext">Chats</span>

          </li>
          <li className="lblistitem">
            <VideoChatIcon className='lbicon'/>
            <span className="lblisttext">Videos</span>

          </li>
          <li className="lblistitem">
            <GroupIcon className='lbicon'/>
            <span className="lblisttext">Groups</span>

          </li>
          <li className="lblistitem">
            <BookmarkIcon className='lbicon'/>
            <span className="lblisttext">Bookmarks</span>

          </li>
          <li className="lblistitem">
            <HelpIcon className='lbicon'/>
            <span className="lblisttext">Questions</span>

          </li>
          <li className="lblistitem">
            <WorkIcon className='lbicon'/>
            <span className="lblisttext">Jobs</span>

          </li>
          <li className="lblistitem">
            <EventIcon className='lbicon'/>
            <span className="lblisttext">Events</span>

          </li>
          <li className="lblistitem">
            <SchoolIcon className='lbicon'/>
            <span className="lblisttext">Courses</span>

          </li>
        </ul>
        <button className='lbbutton'>Show More</button>
        <hr className="lbhr" />
        <ul className="lbfriendlist">
        {Users.map((u)=>(
             <Closefriends key={u.id} user={u}/>
         ))} 
          </ul>
      </div>
      </div>
  )
}
