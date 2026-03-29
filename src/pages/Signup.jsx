import React, { use, useState } from 'react'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/features/user/userAction';
import { useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

const getStrength = (pwd) => {
  if (!pwd) return { score: 0, label: "", color: "" }
  let score = 0
  if (pwd.length >= 8) score++
  if (/[A-Z]/.test(pwd)) score++
  if (/[0-9]/.test(pwd)) score++
  if (/[^A-Za-z0-9]/.test(pwd)) score++
  const map = [
    { label: "", color: "" },
    { label: "Weak", color: "bg-[oklch(60%_0.22_25)]" },
    { label: "Fair", color: "bg-[oklch(75%_0.18_65)]" },
    { label: "Good", color: "bg-[oklch(60%_0.2_230)]" },
    { label: "Strong", color: "bg-[oklch(72%_0.2_145)]" },
  ]
  return { score, ...map[score] }
}

const requirements = [
  { label: "At least 8 characters", test: (p) => p?.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
  { label: "One special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
]

function Signup() {
  const dispatch = useDispatch()
  const { user, error, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()

  let [input, setInput] = useState({})

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const strength = getStrength(input.password)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(registerUser(input))

    if (response.payload.status) {
      navigate(`/otpverification/${response.payload.data._id}`)
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='min-w-80 w-[35%] max-w-[450px] bg-brand-light rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
        <h1 className='w-full text-2xl sm:text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light'>Sign Up </h1>
        <form className='w-full flex flex-col gap-5'>
          <input type="text" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='firstName' placeholder="First Name" required />
          <input type="text" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='lastName' placeholder="Last Name" required />
          <input type="email" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='email' placeholder="Enter Email" required />
          <input type="number" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='phone' placeholder="Enter Phone Number" required />
          <input type="password" className={`bg-white p-2.5 rounded ${error ? "border border-red-600" : ""}`} onChange={(e) => { handleInput(e) }} name='password' placeholder="Enter Password" required />

          <div className="flex flex-col gap-1.5 mt-1">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={[
                    "h-1 flex-1 rounded-full transition-all duration-300",
                    i <= strength.score ? strength.color : "bg-gray-200",
                  ].join(" ")}
                />
              ))}
            </div>
            {strength.label && (
              <p className={[
                "text-[11px] font-semibold",
                strength.score <= 1 ? "text-[oklch(55%_0.22_25)]" :
                  strength.score === 2 ? "text-[oklch(60%_0.15_65)]" :
                    strength.score === 3 ? "text-[oklch(45%_0.18_230)]" :
                      "text-[oklch(40%_0.15_145)]",
              ].join(" ")}>
                {strength.label} password
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-1.5 p-4 rounded-[12px] bg-gray-50 border border-[oklch(55.7%_0.246_272_/_8%)]">
            {requirements.map((req) => {
              const met = req.test(input.password)
              return (
                <div key={req.label} className="flex items-center gap-1.5 text-[11px]">
                  <div className={[
                    "size-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200",
                    met
                      ? "bg-[oklch(72%_0.2_145_/_15%)]"
                      : "bg-gray-200",
                  ].join(" ")}>
                    {met
                      ? <FiCheck size={9} className="text-[oklch(40%_0.15_145)]" strokeWidth={3} />
                      : <span className="size-1 rounded-full bg-gray-400" />
                    }
                  </div>
                  <span className={met ? "text-[oklch(35%_0.02_264)]" : "text-[oklch(65%_0.02_264)]"}>
                    {req.label}
                  </span>
                </div>
              )
            })}
          </div>

          <p className='text-center text-red-600 font-medium'>{error?.message}</p>
          <button
            className={`w-full py-2.5 px-5 rounded-sm flex items-center justify-center gap-[5px] text-white text-[10px] sm:text-sm font-medium bg-brand-primary ${strength.score < 4 ? "bg-gray-700" : "bg-brand-primary"} hover:bg-gray-700`}
            onClick={handleSubmit}
            disabled={strength.score < 4 ? true : false}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup