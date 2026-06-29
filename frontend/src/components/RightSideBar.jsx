import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

const RightSideBar = () => {
  return (
    <div className='w-[25%] mt-2'>
        <div className='p-2 bg-gray-200 rounded-full outline-none w-full flex items-center'>
            <CiSearch size="24px"/>
            <input className='outline-none ' type='text' placeholder='Search....'></input>
        </div>
        <div className='p-4 bg-gray-200 my-4 rounded-2xl'>
            <h1>Who to Follow</h1>
            <div className='flex ic justify-content'>
                <div className='flex'>
                    <div>
                        <Avatar googleId="118096717852922241760" size="40" round={true} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='font-bold'>Nitin </h1>
                        <p className='text-sm'>@NitinChiliveri</p>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                </div>
            </div>

            <div className='flex ic justify-content'>
                <div className='flex'>
                    <div>
                        <Avatar googleId="118096717852922241760" size="40" round={true} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='font-bold'>Nitin </h1>
                        <p className='text-sm'>@NitinChiliveri</p>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                </div>
            </div>


            <div className='flex ic justify-content'>
                <div className='flex'>
                    <div>
                        <Avatar googleId="118096717852922241760" size="40" round={true} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='font-bold'>Nitin </h1>
                        <p className='text-sm'>@NitinChiliveri</p>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSideBar