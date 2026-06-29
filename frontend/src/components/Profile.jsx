import React from 'react'
import { IoMdArrowBack } from "react-icons/io";

const Profile = () => {
  return (
    <div className='w-[50%]'>
      <div>
        <div className='flex items-center'>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <IoMdArrowBack />
          </div>
          <div>
          <h1>Nitin</h1>
          <p>10 Posts</p>
          </div>

        </div>
        <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" ></img>
      </div>
    </div>
  )
}

export default Profile