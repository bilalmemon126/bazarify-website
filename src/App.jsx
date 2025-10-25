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

import AdminLayout from './adminPanel/AdminLayout/AdminLayout'
import Dashboard from './adminPanel/pages/Dashboard/Dashboard'
import UserManagement from './adminPanel/pages/UserManagement/UserManagement'
import ProductManagement from './adminPanel/pages/ProductManagement/ProductManagement'
import Category from './adminPanel/pages/Cartegory/Category'
import AdminLogin from './adminPanel/pages/AdminLogin'

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
          path: "/product/:category",
          element: <Products />
        },
        {
          path: "/addproduct/choosecategory",
          element: <ChooseCategory />
        },
        {
          path: "/addproduct/:category",
          element: <AddProduct />
        },
        {
          path: "/editproduct/:category/:productId",
          element: <AddProduct />
        },
        {
          path: "/productdetails/:id",
          element: <ProductDetails />
        },
        {
          path: "/chat/:myId/:productId", 
          element: <Chat />
        },
        {
          path: "/myads/:myid", 
          element: <MyAds />
        }
      ]
    },
    
    {
      path: "/bazarify/adminlogin",
      element: <AdminLogin />
    },
    {
      path: "/bazarify/adminpanel",
      element: <AdminLayout />,
      children: [
        {
          path: "/bazarify/adminpanel",
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
