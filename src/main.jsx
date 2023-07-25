import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/store/Store.jsx'
import { Barchart } from './Components/charts/Barchart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  

  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
