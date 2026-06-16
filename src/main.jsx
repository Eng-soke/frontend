import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Home from './pages/Home.jsx'
import store from './redux/store/store.js'
import Cart from './pages/Cart.jsx'
import Lists from './admin/pages/Lists.jsx'
import SideBar from './admin/components/SideBar.jsx'
import AddProducts from './admin/pages/AddProducts.jsx'
import AdminLogin from './admin/pages/AdminLogin.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Checkout from './pages/Checkout.jsx'
import Order from './admin/pages/Order.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children:[
      {
        path: '/', element: <Home/>
      },
      {
        path: '/cart', element: <Cart/>
      },
      {
        path: '/admin', element: <SideBar/>
      },
      {
        path: '/admin/lists', element: <Lists/>
      },
      {
        path: '/admin/addproducts', element: <AddProducts/>
      
      },
      {
        path: '/admin/login', element: <AdminLogin/>
      },
      {
        path: '/login', element: <Login/>
      },
      {
        path: '/register', element: <Register/>
      },
      {
        path: '/checkout', element: <Checkout/>
      },
      {
        path: '/order/List', element: <Order/>
      }

    
    
    ]
  }
])

const persist = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    
      
  <PersistGate l persistor={persist}>
    <Provider store={store}>
    <RouterProvider router={router}/>

    </Provider>
  </PersistGate>
  
  </StrictMode>,
)
