import { useState } from 'react'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminAuthLogin } from '../../redux/features/adminAuth/adminAuthAction'

function AdminLogin() {

  const dispatch = useDispatch()
  const { admin, error, loading } = useSelector((state) => state.adminAuth)
  const navigate = useNavigate()
  let [input, setInput] = useState({ email: "", password: "" })
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await dispatch(adminAuthLogin(input))
    
    if (response.payload.status) {
      navigate("/adminpanel")
    }

    setInput({ email: "", password: "" })
  }

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center bg-brand-adminDark'>
        <div className='w-[35%] bg-black rounded-md p-5 flex flex-col gap-7.5 shadow-lg items-center'>
          <h1 className='w-full text-3xl text-center font-semibold pb-3 text-white border-b border-brand-textColor'>Admin Login</h1>
          <form className='w-full flex flex-col gap-5'>
            <input type="email" onChange={(e) => { setInput((prev) => ({ ...prev, email: e.target.value })) }} name='email' placeholder='Enter Email' className={`bg-brand-adminDark p-2.5 placeholder:text-[#666666] rounded text-white ${error ? "border border-red-600" : ""}`} value={input.email} required />
            <input type="password" onChange={(e) => { setInput((prev) => ({ ...prev, password: e.target.value })) }} name='password' placeholder='Enter Password' className={`bg-brand-adminDark p-2.5 placeholder:text-[#666666] rounded text-white ${error ? "border border-red-600" : ""}`} value={input.password} required />
            <p className='text-center text-red-600 font-medium'>{error?.message}</p>
            <Button btnText={"Login"} btnPath={"/"} handleEvent={handleSubmit} />
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminLogin