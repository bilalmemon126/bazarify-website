import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

function Login() {
    let [input, setInput] = useState({email: "", password: ""})
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[35%] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
            <h1 className='w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>Login</h1>
            <form action="/login" className='w-full flex flex-col gap-5'>
                <input type="email" onChange={(e) => {setInput({email: e.target.value})}} name='email'placeholder='Enter Email' required value={input.email} className='bg-white p-2.5 rounded'/>
                <input type="password" onChange={(e) => {setInput({password: e.target.value})}} id='password' name='password' placeholder='Enter Password' required value={input.password} className='bg-white p-2.5 rounded'/>
                <Button btnText={"Login"} btnPath={"/"}/>
            </form>
            <div id="signUpAndForgotPassword" className='w-full flex justify-between px-5'>
            <NavLink to={"/register"} className={"signUp"}>Sign up</NavLink>
            <NavLink to={"/forgotpassword"} className={"forgotPassword"}>Forgot Password</NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login