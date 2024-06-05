import React, { useState } from 'react';
import Images_front from './components/Total.jsx';
import './App.css'; 
import Board from './components/Board.jsx'

function App() {
  const [imagesVisible, setImagesVisible] = useState(false);
  const [frontGavulluCount, setFrontGavulluCount] = useState(0); // State to store countf

  const handleButtonClick = () => {
    setImagesVisible(!imagesVisible); 
  };

  const handleCounts = (countf, countb) => {
    console.log("after change!");
    console.log("Front Gavullu Count:", countf.countf);
    console.log("Back Gavullu Count:", countf.countb);
    setFrontGavulluCount(countf.countf); // Update the countf state with a specific value
  }; 
  

  return (
    <div className="container">
     <Board frontGavulluCount={frontGavulluCount} />
      <h1 className='Heading_app'>PLAY</h1>
      {imagesVisible && <Images_front onCounts={handleCounts} />}
      <button onClick={handleButtonClick} className='Apnabutton'>LET'S ROLL</button>
      <h1>Front Gavullu Count: {frontGavulluCount}</h1> {/* Display the countf value */}
    </div>
  );
}

export default App;
