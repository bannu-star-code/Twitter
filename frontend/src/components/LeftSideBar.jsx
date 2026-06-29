import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link,useNavigate } from 'react-router-dom';


const LeftSideBar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
          <img className='mx-3' src="https://img.magnific.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80" alt="twitter-logo" height={50} width={50} ></img>
        </div>
        <div className='my-4'>
          <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <FaHome  size="28px"/>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
          </Link>

          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <FaInternetExplorer size="28px"/>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
          </div>

          <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <CgProfile  size="28px"/>
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
          </Link>


          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <FaRegBookmark  size="28px"/>
            <h1 className='font-bold text-lg ml-2'>Notification</h1>
          </div>


          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <FaHome  size="28px"/>
            <h1 className='font-bold text-lg ml-2'>Bookmark</h1>
          </div>


           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <LuLogOut  size="28px"/>
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
          </div>


          
           <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
          
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar