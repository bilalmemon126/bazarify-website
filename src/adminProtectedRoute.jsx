import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminProtectedRoute } from './redux/features/protected/protectedAction'
import { useNavigate } from 'react-router-dom'

function AdminProtectedRoute({ children }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAdmin()
  }, [])

  const checkAdmin = async () => {
    const response = await dispatch(adminProtectedRoute())
    if (!response.payload.status) {
      return navigate("/adminlogin")
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

export default AdminProtectedRoute