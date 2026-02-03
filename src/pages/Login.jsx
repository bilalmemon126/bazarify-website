import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/features/user/userAction'

function Login() {
  const dispatch = useDispatch()
  const { user, error, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()
  let [input, setInput] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await dispatch(loginUser(input))

    if (response.payload.status) {
      navigate("/")
    }

    setInput({ email: "", password: "" })
  }

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[35%] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
          <h1 className='w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>Login</h1>
          <form action="/login" className='w-full flex flex-col gap-5'>
            <input type="email" onChange={(e) => { setInput((prev) => ({ ...prev, email: e.target.value })) }} name='email' placeholder='Enter Email' required className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} value={input.email} />
            <input type="password" onChange={(e) => { setInput((prev) => ({ ...prev, password: e.target.value })) }} name='password' placeholder='Enter Password' required className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} value={input.password} />
            <p className='text-center text-red-600 font-medium'>{error?.message}</p>
            <Button btnText={"Login"} btnPath={"/"} handleEvent={handleSubmit} />
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