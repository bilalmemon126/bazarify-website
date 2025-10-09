import React, { use, useState } from 'react'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/features/user/userAction';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const dispatch = useDispatch()
  const {user, error, loading} = useSelector((state) => state.user)
  const navigate = useNavigate()

  let [input, setInput] = useState({})

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(registerUser(input))
    console.log(response.payload.data)

    if(response.payload.status){
      navigate(`/otpverification/${response.payload.data._id}`)
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[35%] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
        <h1 className='w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>Sign Up </h1>
        <form className='w-full flex flex-col gap-5'>
          <input type="text" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='firstName' placeholder="First Name" required />
          <input type="text" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='lastName' placeholder="Last Name" required />
          <input type="email" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='email' placeholder="Enter Email" required />
          <input type="password" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='password' placeholder="Enter Password" required />
          <input type="number" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='phone' placeholder="Enter Phone Number" required />
          <p className='text-center text-red-600 font-medium'>{error?.message}</p>
          <Button btnText={"Signup"} handleEvent={handleSubmit}/>
        </form>
      </div>
    </div>
  )
}

export default Signup