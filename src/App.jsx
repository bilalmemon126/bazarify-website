import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'
import OtpVerification from './pages/OtpVerification'
import ForgotPassword from './pages/ForgotPassword'
import ChooseCategory from './pages/ChooseCategory'
import AddProduct from './pages/AddProduct'
import ProductDetails from './pages/ProductDetails'
import Chat from './pages/Chat'
import MyAds from './pages/MyAds'

import AdminLayout from './adminPanel/AdminLayout'
import Dashboard from './adminPanel/pages/Dashboard'
import UserManagement from './adminPanel/pages/UserManagement/UserManagement'
import ProductManagement from './adminPanel/pages/ProductManagement/ProductManagement'
import Category from './adminPanel/pages/Category'
import AdminLogin from './adminPanel/pages/AdminLogin'
import MyFavourite from './pages/MyFavourite'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Signup />
    },
    {
      path: "/otpverification/:id",
      element: <OtpVerification />
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/product",
          element: <ProtectedRoute children={<Products />} />
        },
        {
          path: "/addproduct/choosecategory",
          element: <ProtectedRoute children={<ChooseCategory />} />
        },
        {
          path: "/addproduct/:categoryName",
          element: <ProtectedRoute children={<AddProduct />} />
        },
        {
          path: "/editproduct/:categoryName/:productId",
          element: <ProtectedRoute children={<AddProduct />} />
        },
        {
          path: "/productdetails/:id",
          element: <ProtectedRoute children={<ProductDetails />} />
        },
        {
          path: "/chat/:myId/:productId", 
          element: <ProtectedRoute children={<Chat />} />
        },
        {
          path: "/chat/:myId", 
          element: <ProtectedRoute children={<Chat />} />
        },
        {
          path: "/myads/:myid", 
          element: <ProtectedRoute children={<MyAds />} />
        },
        {
          path: "/myfavourite/:myid", 
          element: <ProtectedRoute children={<MyFavourite />} />
        }
      ]
    },
    
    {
      path: "/adminlogin",
      element: <AdminLogin />
    },
    {
      path: "/adminpanel",
      element: <AdminLayout />,
      children: [
        {
          path: "/adminpanel",
          element: <Dashboard />
        },
        {
          path: "admin/usermanagement",
          element: <UserManagement />
        },
        {
          path: "admin/productmanagement",
          element: <ProductManagement />
        },
        {
          path: "admin/category",
          element: <Category />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
