import React from 'react'

export default function Closefriends({user}) {
  return (
    <div>
      <li className="lbfriend">
            <img src={user.profilePicture} alt="" className="lbpic" />
            <span className="lbname">{user.username}</span>
          </li>
    </div>
  )
}

