import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './components/main.css';
import Home from './components/Home.jsx';

const RootComponent = () => (
  <div className="Entire">
    <Home/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
