import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Board from './components/Board.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Board />
    <App />
  </React.StrictMode>,
)
