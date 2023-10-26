import React from 'react'
import "./online.css"
export default function Online({user}) {
  return (
    <div>
      <li className="rf">
            <div className="rbicontainer">
              <img src={user.profilePicture} alt="" className="rbppic" />
              <span className="ronline"></span>
            </div>
            <span className="ronlinename">{user.username}</span>
          </li>
    </div>
  )
}
