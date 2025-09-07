import React, { useState } from 'react'
import Button from '../components/Button'

function Signup() {
    let [input, setInput] = useState({firstName: "", lastName: "", email: "", password: "", phone: ""})
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[35%] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
            <h1 className='w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>Sign Up </h1>
            <form action={"/register"} method='post' className='w-full flex flex-col gap-5'>
                <input type="text" className='bg-white p-2.5 rounded' onChange={(e) => {setInput({firstName: e.target.value})}} name='firstName' placeholder="First Name" required value={input.firstName}/>
                <input type="text" className='bg-white p-2.5 rounded' onChange={(e) => {setInput({lastName: e.target.value})}} name='lastName' placeholder="Last Name" required value={input.lastName}/>
                <input type="email" className='bg-white p-2.5 rounded' onChange={(e) => {setInput({email: e.target.value})}} name='email' placeholder="Enter Email" required value={input.email}/>
                <input type="password" className='bg-white p-2.5 rounded' onChange={(e) => {setInput({password: e.target.value})}} name='password' placeholder="Enter Password" required value={input.password}/>
                <input type="number" className='bg-white p-2.5 rounded' onChange={(e) => {setInput({phone: e.target.value})}} name='phone' placeholder="Enter Phone Number" required value={input.phone}/>
                <Button btnText={"Signup"} btnPath={"/otpverification"}/>
            </form>
        </div>
    </div>
  )
}

export default Signup