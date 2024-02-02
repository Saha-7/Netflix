import React, { useState } from 'react'
import Header from './Header.js'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    console.log("hello")
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header/>
      
      <div className="absolute">
        <img  
        alt='background_img'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        />
      </div>

      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>

        <h1 className='py-4 font-bold text-3xl'>
        {isSignInForm? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
        <input 
          type='text' 
          placeholder=' Full Name' 
          className='p-4 my-4 w-full rounded-lg bg-gray-700' 
        />
        )}

        <input 
          type='text' 
          placeholder=' Email or Phone Number' 
          className='p-4 my-4 w-full rounded-lg bg-gray-700' 
        />

        <input 
          type='password' 
          placeholder=' Password' 
          className='p-4 my-4 w-full rounded-lg bg-gray-700'
        />

        <button className='p-4 my-6 bg-red-700 rounded-lg'>
        {isSignInForm? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up now!" : "Old User? Sign In Now"}</p>

      </form>
      
    </div>
  )
}

export default Login
