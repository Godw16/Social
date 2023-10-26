import React from 'react'
import "./rightbar.css"
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Users } from '../../DummyData';
import Online from '../online/Online';
export default function Rightbar() {
  return (
    <div className='rightbar'>
      < div className="rwrapper">
        <div className="bcontainer">
          <CardGiftcardIcon className='bicon'/>
          <span className="btext"><b>Naruto</b> and <b>4 other buddies</b> have a birthday today</span>
        </div>
        <img src="/Assets/ad.jpg" alt="" className="adimg" />
        <h4 className="rtitle">Online Friends</h4>
        <ul className="flist">
         {Users.map((u)=>(
             <Online key={u.id} user={u}/>
         ))} 
          
        </ul>
      </div>
      </div>
  )
}
