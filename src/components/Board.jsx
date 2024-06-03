import React, { useState, useRef } from 'react';
import greenPawn from '../assets/green pawn.png';
import bluePawn from '../assets/blue pawn.png';
import yellowPawn from '../assets/yellow pawn.png';
import redPawn from '../assets/red pawn.png';
import Strikes from './strike';
import Greencircle from './greencircles';
import Redcircles from './Redcircles';
import Bluecircles from './Bluecircles';
import "../App.css";
import Yellowcircles from './Yellowcircles';


function Board() {
  const vertical = [ '1', '2', '3', '4', '5' ];
  const horizontal = ['a', 'b', 'c', 'd', 'e'];
  const [marginLeft, setMarginLeft] = useState(0);  // State to manage marginLeft
  const [marginBottom, setMarginBottom] = useState(0); // State to manage marginTop
  const [marginbLeft, setMarginbLeft] = useState(0); 
  const [marginbBottom, setMarginbBottom] = useState(0);
  const [marginrLeft, setMarginrLeft] = useState(0); 
  const [marginrBottom, setMarginrBottom] = useState(0);
  const [marginyLeft, setMarginyLeft] = useState(0);  // State to manage marginLeft
  const [marginyBottom, setMarginyBottom] = useState(0); 
  const [position, setPosition] = useState({ h: 'c', v: '1' }); // State to track current position, initial position set to 'a' and '3'
  const [positionb, setbPosition] = useState({ h: 'c', v: '5' });
  const [positionr, setrPosition] = useState({ h: 'a', v: '3' });
  const [positiony, setyPosition] = useState({ h: 'e', v: '3' });
  const imageRef = useRef(null);
  const imagebRef = useRef(null);
  const imagerRef = useRef(null);
  const imageyRef = useRef(null);
  const [selectedRedPawn, setSelectedRedPawn] = useState(null);
  const [greenPosition, setGreenPosition] = useState({ marginLeft: 0, marginBottom: 0 });
  const [bluePosition, setBluePosition] = useState({ marginLeft: 0, marginBottom: 0 });
  const [yellowPosition, setYellowPosition] = useState({ marginLeft: 0, marginBottom: 0 });
  const [redPositions, setRedPositions] = useState({
    rpu: { marginLeft: 0, marginBottom: 0 },
    rpr: { marginLeft: 0, marginBottom: 0 },
    rpl: { marginLeft: 0, marginBottom: 0 },
    rpd: { marginLeft: 0, marginBottom: 0 },
  });
  // Ref to the image element
  const inputRef = useRef(null);
  const [value, setValue] = useState(0);

  const Inputcheckgreen = () => {
    const inputValue = parseInt(inputRef.current.value, 10);
    if (!isNaN(inputValue)) {
      setValue(inputValue);
      moveImagegreen(inputValue);
    }
  };
  const Inputcheckblue = () => {
    const inputValue = parseInt(inputRef.current.value, 10);
    if (!isNaN(inputValue)) {
      setValue(inputValue);
      moveImageblue(inputValue);
    }
  };
  const Inputcheckred = () => {
    const inputValue = parseInt(inputRef.current.value, 10);
    if (!isNaN(inputValue)) {
      setValue(inputValue);
      moveImagered(inputValue);
    }
  };
  const Inputcheckyellow = () => {
    const inputValue = parseInt(inputRef.current.value, 10);
    if (!isNaN(inputValue)) {
      setValue(inputValue);
      moveImageyellow(inputValue);
    }
  };
   const resetGreenPawn = () => {
    setPosition({ h: 'c', v: '1' });
    setMarginLeft(0);
    setMarginBottom(0);
  };

  const checkCollision = (newPosition, currentPawn) => {
    // console.log(newPosition.h);
    // console.log(newPosition.v);
    // console.log(position.h);
    // console.log(position.v);
    // console.log(currentPawn);
    if (newPosition.h === position.h && newPosition.v === position.v && currentPawn !== 'green') 
     {console.log('Yes');
      resetGreenPawn();
    }
  };
  const moveImagegreen = (steps) => {
    const stepDuration = 1000; // 1 second

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPosition((prevPosition) => {
          let newH = prevPosition.h;
          let newV = prevPosition.v;
          let newMarginLeft = marginLeft - (i + 1) * 100;
          let newMarginBottom = marginBottom; // Initialize outside conditional

          newH = String.fromCharCode(newH.charCodeAt(0) - 1);
          console.log(newH,newV);
          if (newH < 'a') {
            newH = 'a';
            newV = String.fromCharCode(newV.charCodeAt(0) + 1);
            newMarginBottom =marginBottom- (i-1) * 100; // Update marginBottom
            newMarginLeft = -200; // Assuming it should stop at the edge
            console.log(newH,newV);
            console.log(newMarginBottom);
          }
if(newV>'5' ){
  newV='5';
  newH=String.fromCharCode(newH.charCodeAt(0) + 1);
  newMarginLeft = marginLeft + (1) * 100;
  newMarginBottom=-400;
  console.log(newH,newV);
}
          setMarginLeft(newMarginLeft);
          setMarginBottom(newMarginBottom);

          // Apply the CSS transition effect
          const g = document.getElementById('pu');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newH, v: newV }; // Update position
        });

        // console.log(`Position: ${position.h}${position.v}`);
      }, i * stepDuration);
    }
  };
  const moveImageblue = (steps) => {
    const stepDuration = 1000;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setbPosition((prevPosition) => {
          let newbH = prevPosition.h;
          let newbV = prevPosition.v;
          let newMarginbLeft = marginbLeft + (i + 1) * 100;
          let newMarginbBottom = marginbBottom; // Initialize outside conditional

          newbH = String.fromCharCode(newbH.charCodeAt(0) + 1);
          console.log(newbH,newbV);
          console.log(marginbLeft)
          if (newbH >= 'e') {
            newbH = 'e';
            newbV = String.fromCharCode(newbV.charCodeAt(0) - 1);
            newMarginbBottom =marginbBottom+ (1) * 100; // Update marginBottom
            newMarginbLeft = 200; // Assuming it should stop at the edge
            console.log(newbH,newbV);
            console.log(newMarginbBottom);
          }
// if(newV>'5' ){
//   newV='5';
//   newH=String.fromCharCode(newH.charCodeAt(0) + 1);
//   newMarginLeft = marginLeft + (1) * 100;
//   newMarginBottom=-400;
//   console.log(newH,newV);
// }
          setMarginbLeft(newMarginbLeft);
          setMarginbBottom(newMarginbBottom);

          // Apply the CSS transition effect
          const g = document.getElementById('bpu');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newbH, v: newbV }; // Update position
        });

        // console.log(`Position: ${position.h}${position.v}`);
      }, i * stepDuration);
    }
  };
  const moveImagered = (steps) => {
    if (!selectedRedPawn) return; // Exit if no pawn is selected
  
    const stepDuration = 1000;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setrPosition((prevPosition) => {
          let newrH = prevPosition.h;
          let newrV = prevPosition.v;
          let newMarginrLeft = marginrLeft;
          let newMarginrBottom = marginrBottom - 100;
  
          newrV = String.fromCharCode(newrV.charCodeAt(0) + 1);
  
          setMarginrLeft(newMarginrLeft);
          setMarginrBottom(newMarginrBottom);
  
          const newPosition = { h: newrH, v: newrV };
          checkCollision(newPosition, 'red');
  console.log(selectedRedPawn,marginrLeft,marginrBottom,newrH,newrV);
          return newPosition;
        });
  
        // Apply the CSS transition effect to the selected pawn
        const r = document.getElementById(selectedRedPawn);
        if (r) {
          r.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  
  const moveImageyellow = (steps) => {
    const stepDuration = 1000;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setyPosition((prevPosition) => {
          let newyH = prevPosition.h;
          let newyV = prevPosition.v;
          let newMarginyLeft = marginyLeft;
          let newMarginyBottom = marginyBottom+100;
console.log(newMarginyBottom);
          newyV = String.fromCharCode(newyV.charCodeAt(0) - 1);
          if (newyV < '1') {
            newyV = '5';
            newyH = String.fromCharCode(newyH.charCodeAt(0) + 1);
            newMarginyBottom = 0;
            newMarginyLeft = marginyLeft - 100;
          }

          setMarginyLeft(newMarginyLeft);
          setMarginyBottom(newMarginyBottom);

          // Apply the CSS transition effect
          const y = document.getElementById('ypu');
          if (y) {
            y.style.transition = 'margin 0.5s';
          }

          return { h: newyH, v: newyV }; // Update position
        });

        // console.log(`Position: ${position.h}${position.v}`);
      }, i * stepDuration);
    }
  };
  return (
    <div>
      <div className='board'>
        {horizontal.map((h) =>
          vertical.map((v) => (
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
                    ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pu'
                    id='pu'
                    style={{ marginLeft: `${marginLeft}px`, marginBottom: `${marginBottom}px` }}
                  />
                  <img
                    
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pr'
                    id='pr'
                  
                  />
                  <img
                    // ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pd'
                    id='pd'
                    // style={{ marginLeft: `${marginLeft}px`, marginTop: `${marginBottom}px` }}
                  />
                  <img
                    // ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pl'
                    id='pl'
                  //   style={{ marginLeft: `${marginLeft}px`, marginTop: `${marginBottom}px` }}
                  />
                </div>
              )}
              {h === 'e' && v === '3' && (
                <div className='Parent'>
                  <Bluecircles/>
                  <Strikes />
                  <img
  src={bluePawn}
  alt='Blue Pawn'
  className='pu'
  id='bpu'
  style={{ marginLeft: `${selectedRedPawn === 'bpu' ? marginrLeft : 0}px`, marginBottom: `${selectedRedPawn === 'bpu' ? marginrBottom : 0}px` }}
  onClick={() => setSelectedRedPawn('bpu')}
/>
                  <img src={bluePawn} alt='Blue Pawn' className='pr' />
                  <img src={bluePawn} alt='Blue Pawn' className='pl' />
                  <img src={bluePawn} alt='Blue Pawn' className='pd' />
                </div>
              )}
              {h === 'c' && v === '1' && (
                <div className='Parent'>
                  <Redcircles/>
                  <Strikes />
                  <img
  src={redPawn}
  alt='Red Pawn'
  className='pu'
  id='rpu'
  style={{ marginLeft: `${selectedRedPawn === 'rpu' ? marginrLeft : 0}px`, marginBottom: `${selectedRedPawn === 'rpu' ? marginrBottom : 0}px` }}
  onClick={() => setSelectedRedPawn('rpu')}
/>
<img
  src={redPawn}
  alt='Red Pawn'
  className='pr'
  id='rpr'
  style={{ marginLeft: `${selectedRedPawn === 'rpr' ? marginrLeft : 0}px`, marginBottom: `${selectedRedPawn === 'rpr' ? marginrBottom : 0}px` }}
  onClick={() => setSelectedRedPawn('rpr')}
/>
<img
  src={redPawn}
  alt='Red Pawn'
  className='pl'
  id='rpl'
  style={{ marginLeft: `${selectedRedPawn === 'rpl' ? marginrLeft : 0}px`, marginBottom: `${selectedRedPawn === 'rpl' ? marginrBottom : 0}px` }}
  onClick={() => setSelectedRedPawn('rpl')}
/>
<img
  src={redPawn}
  alt='Red Pawn'
  className='pd'
  id='rpd'
  style={{ marginLeft: `${selectedRedPawn === 'rpd' ? marginrLeft : 0}px`, marginBottom: `${selectedRedPawn === 'rpd' ? marginrBottom : 0}px` }}
  onClick={() => setSelectedRedPawn('rpd')}
/>

                </div>
              )}
              {h === 'c' && v === '5' && (
                <div className='Parent'>
                  <Yellowcircles/>
                  <Strikes />
                  <img
                    // ref={imageRef}
                    src={yellowPawn}
                    alt='Yellow Pawn'
                    className='pu'
                    id='ypu'
                    style={{ marginLeft: `${marginyLeft}px`, marginBottom: `${marginyBottom}px` }}
                  />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pr' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pd' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pl' />
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {/* <button className='inputs' onClick={moveImage}>
        Click me
      </button> */}
      <input id='inputfield' ref={inputRef}></input>
      <button onClick={Inputcheckgreen}>Move Green</button>
      <button onClick={Inputcheckblue}>Move Blue</button>
      <button onClick={Inputcheckred}>Move Red</button>
      <button onClick={Inputcheckyellow}>Move Yellow</button>
    </div>
  );
}

export default Board; 
