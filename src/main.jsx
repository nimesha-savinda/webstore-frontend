import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/pages/HomePage.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Cart from './assets/pages/Cart.jsx'
import Shop from './assets/pages/Shop.jsx'
import SignInPage from './assets/pages/auth/signin/SIgnInPage.jsx'
import SignUpPage from './assets/pages/auth/signout/SignUpPage.jsx'
import Checkout from './assets/pages/Checkout.jsx'
import OrderHistory from './assets/pages/OrderHistory.jsx'
import ProductDetails from './assets/pages/ProductDetails.jsx'
import RootLayout from './assets/layouts/RootLayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter(
  [{
    element:<RootLayout/>,
    children:[
        { path:"/",
          element:<App/>
        },
        { path:"/cart",
          element:<Cart/>
        },
        { path:"/checkout",
          element:<Checkout/>
        },
        { path:"/shop",
          element:<Shop/>
        },
        { path:"/product/:id",
          element:<ProductDetails/>
        },
        {
          path: "/sign-in",
          element: <SignInPage />,
        },
        {
          path: "/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/history",
          element: <OrderHistory />,
        },
    ]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>,
)
