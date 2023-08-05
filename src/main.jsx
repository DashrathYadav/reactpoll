import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/store/Store.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { UnitPoll } from './Components/sharing/UnitPoll.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/unitPoll/:pollID",
    element:<UnitPoll/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
)
