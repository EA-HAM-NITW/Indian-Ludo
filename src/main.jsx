import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './components/main.css';
import Music from './components/Music.jsx'
const RootComponent = () => (
  <div className="Entire">
    <App />
      <Music/>
  </div>
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
