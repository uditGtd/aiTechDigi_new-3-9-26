import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/scss/main.scss'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
