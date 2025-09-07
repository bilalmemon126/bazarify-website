import React, { useState } from 'react'
import Button from '../components/Button'

function ForgotPassword() {
  let [input, setInput] = useState("")
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[35%] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
            <h1 className='w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>Enter New Password</h1>
            <form action={"/forgotpassword"} className='w-full flex flex-col gap-5'>
                <input type="password" className='bg-white p-2.5 rounded' onChange={(e) => {setInput(e.target.value)}} name="password" placeholder="Enter Password" required value={input}/>
                <Button btnPath={"/login"} btnText={"Change Password"}/>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword