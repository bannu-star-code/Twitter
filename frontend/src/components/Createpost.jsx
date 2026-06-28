import React from 'react'
import { CiImageOn } from "react-icons/ci";
import Avatar from 'react-avatar';

const Createpost = () => {
  return (
    <div className='w-[100%]'>
       <div className='m-3'>
        <div className='flex items-center justify-between'>
            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-700 txt-lg'>For You</h1>

            </div>
            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-700 txt-lg'>Following</h1>
            </div>
        </div>

        <div>
            <div className='flex items-center p-4'>
                <Avatar googleId="118096717852922241760" size="40" round={true} />
                <input className='w-full outline-none border-none text-lg ml-2' type='text' placeholder='What is Happening?'/>
            </div>

            <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                <div>
                    <CiImageOn />
                </div>
                <button className='bg-[#1D9BF0] rounded-full text-lg text-white text-right px-4 py-1 border-none'>Post</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Createpost