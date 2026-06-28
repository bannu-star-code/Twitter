import React from 'react'
import LeftSideBar from './LeftSideBar.jsx'
import Feed from './Feed.jsx'
import RightSideBar from './RightSideBar.jsx'

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
    <LeftSideBar/>
    <Feed/>
    <RightSideBar/>
    </div>
  )
}

export default Home