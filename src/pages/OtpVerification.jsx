import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { otpVerification } from '../redux/features/user/userAction'

function OtpVerification() {
  const { id } = useParams()
  let [input, setInput] = useState({userId: id, otp: ""})
  const dispatch = useDispatch()
  const { user, error, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await dispatch(otpVerification(input))

    if (response.payload.status) {
      navigate("/")
    }

    setInput((prev) => ({...prev, otp: ""}))
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='min-w-80 w-[35%] max-w-[450px] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
        <h1 className='w-full text-2xl sm:text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>OTP Verification</h1>
        <form action={"/otpverification"} className='w-full flex flex-col gap-5'>
          <input type="number" className='bg-white p-2.5 rounded' onChange={(e) => { setInput((prev) => ({ ...prev, otp: e.target.value })) }} name="otp" placeholder="Enter OTP" required value={input.otp} />
          <p className='text-center text-red-600 font-medium'>{error?.message}</p>
          <Button btnPath={"/"} btnText={"Verify"} handleEvent={handleSubmit}/>
        </form>
      </div>
    </div>
  )
}

export default OtpVerification