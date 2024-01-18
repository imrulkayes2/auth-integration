import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyCreateRoute from './MyCreateRoute/MyCreateRoute'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyCreateRoute} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
