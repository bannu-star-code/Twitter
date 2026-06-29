import React from 'react'
import Createpost from './Createpost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className='w-[50%]'>
      <Createpost/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </div>
  )
}

export default Feed