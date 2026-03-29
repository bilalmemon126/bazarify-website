import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../redux/features/user/userAction'

function ForgotPassword() {
  const dispatch = useDispatch()
  const { user, error, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    let response = await dispatch(forgotPassword({ email }))

    if (response.payload.status) {
      navigate(`/forgot-password-otp/${response.payload.userId}`)
    }
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='min-w-80 w-[35%] max-w-[450px] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
        <h1 className='w-full text-2xl sm:text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>New Password</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
            className='bg-white p-2.5 rounded'
          />

          <button
            type="submit"
            className="w-full py-2.5 px-5 rounded-sm flex items-center justify-center gap-[5px] text-white text-[10px] sm:text-sm font-medium bg-brand-primary hover:bg-gray-700"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending…
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send OTP
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword