import React, { useState } from 'react'
import { USER_API_END_POINT } from "../utils/constant";
import axios from "axios";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [isLogin, setisLogin]=useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]=useState("");
  const [username, setUsername]=useState("");
  const navigate=useNavigate()


  const loginSignupHandler=async(e)=>{
    setisLogin(!isLogin)
  }

  const submitHandler=async(e)=>{
     e.preventDefault()
    if(isLogin){
      try{
        console.log(email,password)
        const res=await axios.post(`${USER_API_END_POINT}/login`,{email,password})
        console.log(res)
        navigate("/")
        if(res.data.success){
          toast.success(res.data.message)
        }
      }catch(error){
        toast.error(error.response.data.message)
        console.log(error, "errorrrr")
      }
    }else{  
      try{
        const res=await axios.post(`${USER_API_END_POINT}/register`,{email,password,name, username})
        console.log(res)
        if(res.data.success){
          toast.success(res.data.message)
          setisLogin(true)
        }
      }catch(error){
        toast.error(error.response.data.message)
        console.log(error, "errorrrr")
      }
    }
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
          <form className='flex flex-col w-[70%]' onSubmit={submitHandler}>
            {
            !isLogin && (<>
            <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name} className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            <input type='text' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} value={username}  className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            </>
            )
            }
            <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}  className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            <input type='text' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1'></input>
            <button className='bg-[#1D9BF0] rounded-full border-none py-2 text-lg text-white my-4'>{isLogin?"Login":"Create an Account"}</button>
            <h1>Already have an Account? <span onClick={loginSignupHandler} className='font-bold cursor-pointer text-blue-600'>{isLogin?"Register":"Login"}</span></h1>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login