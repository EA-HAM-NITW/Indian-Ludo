import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx';
import '../index.css';
import './main.css';
import Music from './Music.jsx';

function Home() {
    return (
    <div className="Entire">
        <App />
        <Music/>
    </div>
)}
export default Home;
