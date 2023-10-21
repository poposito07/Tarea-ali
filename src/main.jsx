import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Home from './pages/Home'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <App></App>
  </React.StrictMode>,
)
