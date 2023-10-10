import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SetRoutes from './jsx/Routes/SetRoutes'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <SetRoutes />
  </BrowserRouter>

)

