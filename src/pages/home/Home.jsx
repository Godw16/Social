import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
export default function Home() {
  return (
    <div>
      <>
      <Navbar/>
      <div className="homecontainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
      </>
      
    </div>
  )
}
