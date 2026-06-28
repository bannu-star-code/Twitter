import React from 'react'
import Avatar from 'react-avatar';
import { AiFillLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div>
        <div>
            <div className='flex'>
                <div className='mx-2'><Avatar googleId="118096717852922241760" size="40" round={true} /></div>
                <div className=''>
                <div className='mx-2 my-0 flex'>
                    <h1>Bannu Chiliveri</h1> <p className='text-gray-900 text-sm'>@bannu_chiliveri</p>
                </div>
                <div>
                    <p className=''>Postkvnnnnnnsss cmm c  ns snn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnc cnnnnnnnnnnnnnnnnnnnnnnnnnnn..</p>
                </div>

                <div className='flex justify-between w-full'>
                    <div className='flex items-center'><CiHeart />
                    <p>0</p>
                    </div>
                    <div className='flex items-center'><FaComment />
                    <p>0</p>
                    </div>
                    <div className='flex items-center'>
                        <CiBookmark />
                        <p>0</p>
                    </div>
            
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet