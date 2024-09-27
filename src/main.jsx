import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/pages/HomePage.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Cart from './assets/pages/Cart.jsx'
import Shop from './assets/pages/Shop.jsx'
import Checkout from './assets/pages/Checkout.jsx'
import RootLayout from './assets/layouts/RootLayout.jsx'

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
    ]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
