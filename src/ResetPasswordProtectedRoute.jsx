import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetPasswordProtectedRoute } from './redux/features/protected/protectedAction'
import { useNavigate } from 'react-router-dom'

function ResetPasswordProtectedRoute({ children }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkVerifiedUser()
  }, [])

  const checkVerifiedUser = async () => {
    const response = await dispatch(resetPasswordProtectedRoute())
    if (!response.payload.status) {
      return navigate("/login")
    }
    if (response.payload.status) {
      return setIsLoading(false)
    }
  }
  return isLoading ? (
    <p>loading...</p>
  ) :
    (
      <>
        {children}
      </>
    )
}

export default ResetPasswordProtectedRoute