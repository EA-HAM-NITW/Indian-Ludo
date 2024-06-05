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
    <div className='Outer_container'>
      <div className='Inner_container1'>
     <Board frontGavulluCount={frontGavulluCount} />
     </div>
     <div className='Inner_container2'>
      {imagesVisible && <Images_front onCounts={handleCounts} />}
      <button onClick={handleButtonClick} className='Apnabutton'>LET'S ROLL</button>
      </div>
    </div>
  );
}

export default App;
