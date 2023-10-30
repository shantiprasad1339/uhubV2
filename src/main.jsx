import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SetRoutes from './jsx/Routes/SetRoutes'
import { Provider } from 'react-redux'
import store from './jsx/Redux/Store'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Provider store={store}>
    <SetRoutes />
    </Provider>
  </BrowserRouter>

)

