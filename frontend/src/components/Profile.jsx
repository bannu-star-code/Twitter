import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import {Link} from "react-router-dom"
import Avatar from 'react-avatar';


const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-300'>
      <div>
        <div className='flex items-center px-4 py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <IoMdArrowBack size="24px"/>
          </Link>
          <div>
          <h1 className='font-bold text-lg'>Nitin</h1>
          <p className='text-gray-500'>10 Posts</p>
          </div>

        </div>
        <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" ></img>
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
            <Avatar googleId="118096717852922241760" size="120" round={true} />
        </div>
        <div className='text-right m-4'>
            <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400 '>Edit Profile</button>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-xl'>Nitin Chiliveri</h1>
            <p>@NitinChiliveri</p>
        </div>
        <div className='m-4 text-sm'>
            <p>
                Exploring the web endless possibilities 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Profile