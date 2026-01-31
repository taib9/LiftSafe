import React from 'react'
import Logo from "../assets/LiftSafe-Logo.png";

const SignUp = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-100'>
      <img src={Logo} className='max-w-[300px]'/>
      <h1 className='text-teal font-bold text-[3rem] text-center'>Create New Account</h1>
      <div>
        <input type="text" className='bg-gray-500 py-2 w-2xl mb-2 rounded-full' />
        <input type="text" className='bg-gray-500 py-2 w-2xl rounded-full' />
      </div>
    </div>

  )
}

export default SignUp