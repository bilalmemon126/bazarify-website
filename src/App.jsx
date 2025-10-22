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
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
