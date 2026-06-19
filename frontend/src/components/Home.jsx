import React from 'react'
import LeftSideBar from './LeftSideBar.jsx'
import Feed from './Feed.jsx'
import RightSideBar from './RightSideBar.jsx'

const Home = () => {
  return (
    <>
    <LeftSideBar/>
    <Feed/>
    <RightSideBar/>
    </>
  )
}

export default Home