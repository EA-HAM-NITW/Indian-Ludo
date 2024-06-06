import React, { useState } from 'react';
import Images_front from './components/Total.jsx';
import './App.css'; 
import Board from './components/Board.jsx';

function App() {
  const [imagesVisible, setImagesVisible] = useState(false);
  const [frontGavulluCount, setFrontGavulluCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(1);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const handleButtonClick = () => {
    if (!imagesVisible) {
      setPlayerCount(prevCount => prevCount + 1); 
    }
    setImagesVisible(prevVisible => !prevVisible);
    setIsPlayerTurn(false); // After button click, it's not player's turn
  };

  const handleCounts = (counts) => {
    console.log("after change!");
    console.log("Front Gavullu Count:", counts.countf);
    console.log("Back Gavullu Count:", counts.countb);
    setFrontGavulluCount(counts.countf);
  }; 
  
  return (
    <div className='Outer_container'>
      <div className='Inner_container1'>
        <Board frontGavulluCount={frontGavulluCount} />
      </div>
      <div className='Inner_container2'>
        {imagesVisible && <Images_front onCounts={handleCounts} />}
        <button onClick={handleButtonClick} className='Apnabutton'>LET'S ROLL</button>
        <h2 className='player_name'>PLAYER {playerCount} HAS TO ROLL</h2>
      </div>
    </div>
  );
}

export default App;

