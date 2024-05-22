import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dup_Board from './components/Dup_Board.jsx'
import './index.css';
import './components/main.css';


const RootComponent = () => (
  <div className="Entire">
    <Dup_Board className="Box"/>
    <App className="Box"/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);