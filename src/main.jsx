import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Provider/Router'
import 'swiper/css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='text-white font-NormalText'>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
