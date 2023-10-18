import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/c73c61a7-af49-4f7a-a0b7-aff964e219db/IE-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-netflix" srcset="" />
      </div>

      <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&(
            <input  type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-200' />
          )}
          <input  type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-200' />
          <input  type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-200' />
          <button className='p-4 my-6 bg-red-800 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?"}</p>
      </form>
    </div>
  )
}

export default Login
