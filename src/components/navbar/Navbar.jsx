import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Navbar() {
  return (
    <div className='navcontainer'>
      <div className="navLeft">
        <span className='logo'>Social</span>
      </div>
      <div className="navCenter">
        <div className="searchbar">
          <SearchIcon className='searchicon'/>
          <input placeholder='search'className='searchinpt' type="text"  />

        </div>
      </div>
      <div className="navRight">
        <div className="navLinks">
          <span className="navlink">Homepage</span>
          <span className="navlink">Timeline</span>
        </div>
        <div className="navIcons">
          <div className="navIconsItem">
            <PersonIcon/>
            <span className="navIconBadge">1</span>
          </div>
          <div className="navIconsItem">
            <ChatBubbleIcon/>
            <span className="navIconBadge">1</span>
          </div>
          <div className="navIconsItem">
            <NotificationsIcon/>
            <span className="navIconBadge">1</span>
          </div>
        </div>
        <img src="/Assets/Persons/1.jpeg" alt="" className="navImg" />

      </div>
    </div>
  )
}
