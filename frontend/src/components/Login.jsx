import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setisLogin]=useState(true);

  const loginSignupHandler=()=>{
    setisLogin(!isLogin)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
          <img className='ml-5' width={"300px"} src="https://imgs.search.brave.com/Ocst83Q94sNDsG-C1wc-OG_ojw5DjjWX8miLKKPv53k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjUwNC8yNTA0/ODM5LnBuZw" alt="twitter-logo" />
        </div>
        <div>
          <div>
            <h1 className='font-bold text-5xl'>Happening Now</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin?"Login":"Register"}</h1>
          <form className='flex flex-col w-[70%]'>
            {
            !isLogin && (<>
            <input type='text' placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            <input type='text' placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            </>
            )
            }
            <input type='text' placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            <input type='text' placeholder='Password'  className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            <button className='bg-[#1D9BF0] rounded-full border-none py-2 text-lg text-white my-4'>{isLogin?"Login":"Create an Account"}</button>
            <h1>Already have an Account? <span onClick={loginSignupHandler} className='font-bold cursor-pointer text-blue-600'>{isLogin?"Register":"Login"}</span></h1>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login