import React, { useState, useRef } from 'react';
import greenPawn from '../assets/green pawn.png';
import bluePawn from '../assets/blue pawn.png';
import yellowPawn from '../assets/yellow pawn.png';
import redPawn from '../assets/red pawn.png';
import Strikes from './strike';
import Greencircle from './greencircles';
import Redcircles from './Redcircles';
import Bluecircles from './Bluecircles';
import Yellowcircles from './Yellowcircles';
import "../App.css";

const greenPawnPath = [
  { h: 'a', v: '3' }, { h: 'a', v: '2' }, { h: 'a', v: '1' },
  { h: 'b', v: '1' }, { h: 'c', v: '1' }, { h: 'd', v: '1' }
];

function Dup_Board() {
  
  const [position, setPosition] = useState({h : 'a' , v : '3'});
  const [greenPositionIndex, setGreenPositionIndex] = useState(0);
  const inputRef = useRef(null);

  const Inputcheckgreen = () => {
    const inputValue = parseInt(inputRef.current.value, 10);
    if (!isNaN(inputValue)) {
      moveImagegreen(inputValue);
    }
  };

  const resetGreenPawn = () => {
    setGreenPositionIndex(0);
    setPosition({h : 'a' , v : '3'});
    updatePawnPosition({h : 'a' , v : '3'});
  };

  const moveImagegreen = (steps) => {
    const stepDuration = 1000;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setGreenPositionIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % greenPawnPath.length;
          const newPosition = greenPawnPath[nextIndex];

          console.log(`Step ${i + 1}: Moving to position ${newPosition.h}${newPosition.v}`);

          setPosition(newPosition);
          updatePawnPosition(newPosition);
          return nextIndex;
        });
      }, i * stepDuration);
    }
  };

  const updatePawnPosition = (position) => {
    const g = document.getElementById('pu');
    if (g) {
      g.style.transition = 'all 0.5s';
      g.style.left = `${(position.h.charCodeAt(0) - 'a'.charCodeAt(0)) * 100}px`;
      g.style.top = `${(position.v.charCodeAt(0) - '1'.charCodeAt(0)) * 100}px`;
    }
  };

  return (
    <div>
      <div className='board'>
        {['a', 'b', 'c', 'd', 'e'].map((h) =>
          ['1', '2', '3', '4', '5'].map((v) => (
            <div className='tile' key={`${h}${v}`}>
              {h === 'c' && v === '3' && (
                <div className='HOME'>
                  <div className='triangleu'></div>
                  <div className='triangler'></div>
                  <div className='trianglel'></div>
                  <div className='triangled'></div>
                  <Strikes />
                </div>
              )}
              {h === 'a' && v === '3' && (
                <div className='Parent'>
                  <Strikes />
                  <Greencircle />
                  <img
                    id='pu'
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pu'
                    style={{
                        left: `${(parseInt(position.h, 36) - 10) * 100}px`,
                        top: `${(parseInt(position.v) - 1) * 100}px`
                      }}
                  />
                  <img src={greenPawn} alt='Green Pawn' className='pr' id='pr' />
                  <img src={greenPawn} alt='Green Pawn' className='pd' id='pd' />
                  <img src={greenPawn} alt='Green Pawn' className='pl' id='pl' />
                </div>
              )}
              {h === 'e' && v === '3' && (
                <div className='Parent'>
                  <Bluecircles />
                  <Strikes />
                  <img src={bluePawn} alt='Blue Pawn' className='pu' />
                  <img src={bluePawn} alt='Blue Pawn' className='pr' />
                  <img src={bluePawn} alt='Blue Pawn' className='pl' />
                  <img src={bluePawn} alt='Blue Pawn' className='pd' />
                </div>
              )}
              {h === 'c' && v === '1' && (
                <div className='Parent'>
                  <Redcircles />
                  <Strikes />
                  <img src={redPawn} alt='Red Pawn' className='pu' />
                  <img src={redPawn} alt='Red Pawn' className='pr' />
                  <img src={redPawn} alt='Red Pawn' className='pl' />
                  <img src={redPawn} alt='Red Pawn' className='pd' />
                </div>
              )}
              {h === 'c' && v === '5' && (
                <div className='Parent'>
                  <Yellowcircles />
                  <Strikes />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pu' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pr' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pd' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pl' />
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <input ref={inputRef} type="number" />
      <button onClick={Inputcheckgreen}>Move Green Pawn</button>
      <button onClick={resetGreenPawn}>Reset Green Pawn</button>
    </div>
  );
}

export default Dup_Board;
