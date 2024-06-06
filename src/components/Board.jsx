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

function Board({ frontGavulluCount }) {
  const vertical = [ '1', '2', '3', '4', '5' ];
  const horizontal = ['a', 'b', 'c', 'd', 'e'];
  const [marginguLeft, setMarginguLeft] = useState(0);  // State to manage marginLeft
  const [marginguBottom, setMarginguBottom] = useState(0);
  
  // State to manage marginTop
  const [margingrLeft, setMargingrLeft] = useState(0);  // State to manage marginLeft
  const [margingrBottom, setMargingrBottom] = useState(0);

  const [margingdLeft, setMargingdLeft] = useState(0);  // State to manage marginLeft
  const [margingdBottom, setMargingdBottom] = useState(0);

  const [marginglLeft, setMarginglLeft] = useState(0);  // State to manage marginLeft
  const [marginglBottom, setMarginglBottom] = useState(0);

  const [marginbuLeft, setMarginbuLeft] = useState(0); 
  const [marginbuBottom, setMarginbuBottom] = useState(0);

  const [marginbrLeft, setMarginbrLeft] = useState(0); 
  const [marginbrBottom, setMarginbrBottom] = useState(0);

  const [marginbdLeft, setMarginbdLeft] = useState(0); 
  const [marginbdBottom, setMarginbdBottom] = useState(0);

  const [marginblLeft, setMarginblLeft] = useState(0); 
  const [marginblBottom, setMarginblBottom] = useState(0);

  const [marginrLeft, setMarginrLeft] = useState(0); 
  const [marginrBottom, setMarginrBottom] = useState(0);

  const [marginyLeft, setMarginyLeft] = useState(0);  // State to manage marginLeft
  const [marginyBottom, setMarginyBottom] = useState(0); 

  const [positiongu, setPositiongu] = useState({ h: 'c', v: '1' }); 
  const [positiongr, setPositiongr] = useState({ h: 'c', v: '1' }); 
  const [positiongd, setPositiongd] = useState({ h: 'c', v: '1' }); 
  const [positiongl, setPositiongl] = useState({ h: 'c', v: '1' });
  // State to track current position, initial position set to 'a' and '3'
  const [positionbu, setPositionbu] = useState({ h: 'c', v: '5' });
  const [positionbr, setPositionbr] = useState({ h: 'c', v: '5' });
  const [positionbd, setPositionbd] = useState({ h: 'c', v: '5' });
  const [positionbl, setPositionbl] = useState({ h: 'c', v: '5' });
  
  const [positionr, setrPosition] = useState({ h: 'a', v: '3' });
  const [positiony, setyPosition] = useState({ h: 'e', v: '3' });

  const imageguRef = useRef(null);
  const imagegrRef = useRef(null);
  const imagegdRef = useRef(null);
  const imageglRef = useRef(null);

  const imagebuRef = useRef(null);
  const imagebrRef = useRef(null);
  const imagebdRef = useRef(null);
  const imageblRef = useRef(null);

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

  const handlePawnClickgu = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImagegreenup(frontGavulluCount);
    }
  };
  const handlePawnClickgr = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImagegreenright(frontGavulluCount);
    }
  };
  const handlePawnClickgd = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImagegreendown(frontGavulluCount);
    }
  };
  const handlePawnClickgl = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImagegreenleft(frontGavulluCount);
    }
  };
  const handlePawnClickbu = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImageblueup(frontGavulluCount);
    }
  };
  const handlePawnClickbr = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImageblueright(frontGavulluCount);
    }
  };
  const handlePawnClickbd = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImagebluedown(frontGavulluCount);
    }
  };
  const handlePawnClickbl = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      moveImageblueleft(frontGavulluCount);
    }
  };
  // const Inputcheckgreen = () => {
  //   const inputValue = parseInt(inputRef.current.value, 10);
  //   if (!isNaN(inputValue)) {
  //     setValue(inputValue);
  //     moveImagegreen(inputValue);
  //   }
  // };
  // const Inputcheckblue = () => {
  //   const inputValue = parseInt(inputRef.current.value, 10);
  //   if (!isNaN(inputValue)) {
  //     setValue(inputValue);
  //     moveImageblue(inputValue);
  //   }
  // };
  // const Inputcheckred = () => {
  //   const inputValue = parseInt(inputRef.current.value, 10);
  //   if (!isNaN(inputValue)) {
  //     setValue(inputValue);
  //     moveImagered(inputValue);
  //   }
  // };
  // const Inputcheckyellow = () => {
  //   const inputValue = parseInt(inputRef.current.value, 10);
  //   if (!isNaN(inputValue)) {
  //     setValue(inputValue);
  //     moveImageyellow(inputValue);
  //   }
  // };
  //  const resetGreenPawn = () => {
  //   setPosition({ h: 'c', v: '1' });
  //   setMarginguLeft(0);
  //   setMarginguBottom(0);
  // };

  // const checkCollision = (newPosition, currentPawn) => {
  //   // console.log(newPosition.h);
  //   // console.log(newPosition.v);
  //   // console.log(position.h);
  //   // console.log(position.v);
  //   // console.log(currentPawn);
  //   if (newPosition.h === position.h && newPosition.v === position.v && currentPawn !== 'green') 
  //    {console.log('Yes');
  //     resetGreenPawn();
  //   }
  // };
  const moveImagegreenup = (steps) => {
    const stepDuration = 1000; // 1 second

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPositiongu((prevPosition) => {
          let newH = prevPosition.h;
          let newV = prevPosition.v;
          let newMarginLeft = marginguLeft - (i + 1) * 100;
          let newMarginBottom = marginguBottom;

          newH = String.fromCharCode(newH.charCodeAt(0) - 1);
          console.log(newH,newV,newMarginLeft,newMarginBottom);
          if (newH < 'a') {
            newH = 'a';
            newV = String.fromCharCode(newV.charCodeAt(0) + 1);
            newMarginBottom = marginguBottom - (i + 1) * 100;
            newMarginLeft = -200; // Assuming it should stop at the edge
            console.log(newH,newV,newMarginLeft,newMarginBottom);
          }
          if (newV > '5') {
            newV = '5';
            newH = String.fromCharCode(newH.charCodeAt(0) + 1);
            newMarginLeft = marginguLeft + 100;
            newMarginBottom = -400;
          }

          setMarginguLeft(newMarginLeft);
          setMarginguBottom(newMarginBottom);

          const g = document.getElementById('pu');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newH, v: newV };
        });
      }, i * stepDuration);
    }
  };

  const moveImagegreenright = (steps) => {
    const stepDuration = 1000; // 1 second

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPositiongr((prevPosition) => {
          let newgrH = prevPosition.h;
          let newgrV = prevPosition.v;
          let newMargingrLeft = margingrLeft - (i + 1) * 100;
          let newMargingrBottom = margingrBottom;

          newgrH = String.fromCharCode(newgrH.charCodeAt(0) - 1);
          console.log(newgrH,newgrV,newMargingrLeft,newMargingrBottom);
          if (newgrH < 'a') {
            newgrH = 'a';
            newgrV = String.fromCharCode(newgrV.charCodeAt(0) + 1);
            newMargingrBottom = margingrBottom - (i + 1) * 100;
            newMargingrLeft = -200; // Assuming it should stop at the edge
            console.log(newgrH,newgrV,newMargingrLeft,newMargingrBottom);
          }
          if (newgrV > '5') {
            newgrV = '5';
            newgrH = String.fromCharCode(newgrH.charCodeAt(0) + 1);
            newMargingrLeft = margingrLeft + 100;
            newMargingrBottom = -400;
          }

          setMargingrLeft(newMargingrLeft);
          setMargingrBottom(newMargingrBottom);

          const g = document.getElementById('pr');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newgrH, v: newgrV };
        });
      }, i * stepDuration);
    }
  };
  const moveImagegreendown = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'c', v: '1' }, // start
      { h: 'b', v: '1' }, // (c,1) to (a,1)
      { h: 'a', v: '1' }, // (b,1) to (a,1)
      { h: 'a', v: '2' }, // (a,1) to (a,5)
      { h: 'a', v: '3' }, // (a,2) to (a,5)
      { h: 'a', v: '4' }, // (a,3) to (a,5)
      { h: 'a', v: '5' }, // (a,4) to (a,5)
      { h: 'b', v: '5' }, // (a,5) to (e,5)
      { h: 'c', v: '5' }, // (b,5) to (e,5)
      { h: 'd', v: '5' }, // (c,5) to (e,5)
      { h: 'e', v: '5' }, // (d,5) to (e,5)
      { h: 'e', v: '4' }, // (e,5) to (e,1)
      { h: 'e', v: '3' }, // (e,4) to (e,1)
      { h: 'e', v: '2' }, // (e,3) to (e,1)
      { h: 'e', v: '1' }, // (e,2) to (e,1)
      { h: 'd', v: '1' }, // (e,1) to (a,1)
      { h: 'd', v: '2' }, // (d,1) to (a,1)
      { h: 'd', v: '3' }, // (d,2) to (a,1)
      { h: 'd', v: '4' }, // (d,3) to (a,1)
      { h: 'c', v: '4' }, // (d,4) to (c,4)
      { h: 'b', v: '4' }, // (c,4) to (b,4)
      { h: 'b', v: '3' }, // (b,4) to (b,3)
      { h: 'b', v: '2' }, // (b,3) to (b,2)
      { h: 'c', v: '2' }, // (b,2) to (c,2)
      { h: 'c', v: '3' }, // (c,2) to (c,3)
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positiongd.h && pos.v === positiongd.v);
    let currentMarginLeft = margingdLeft;
    let currentMarginBottom = margingdBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMargingdLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMargingdBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
        console.log(nextPosition.h,nextPosition.v);
        console.log(newMargingdLeft,newMargingdBottom);
        setMargingdLeft(newMargingdLeft);
        setMargingdBottom(newMargingdBottom);
  
        currentMarginLeft = newMargingdLeft;
        currentMarginBottom = newMargingdBottom;
  
        setPositiongd(nextPosition);
  
        // Apply the CSS transition effect
        const g = document.getElementById('gpd');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  
  const moveImagegreenleft = (steps) => {
    const stepDuration = 1000; // 1 second

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPositiongl((prevPosition) => {
          let newglH = prevPosition.h;
          let newglV = prevPosition.v;
          let newMarginglLeft = marginglLeft - (i + 1) * 100;
          let newMarginglBottom = marginglBottom;

          newglH = String.fromCharCode(newglH.charCodeAt(0) - 1);
          console.log(newglH,newglV,newMarginglLeft,newMarginglBottom);
          if (newglH < 'a') {
            newglH = 'a';
            newglV = String.fromCharCode(newglV.charCodeAt(0) + 1);
            newMarginglBottom = marginglBottom - (i + 1) * 100;
            newMarginglLeft = -200; // Assuming it should stop at the edge
            console.log(newglH,newglV,newMarginglLeft,newMarginglBottom);
          }
          if (newglV > '5') {
            newglV = '5';
            newglH = String.fromCharCode(newglH.charCodeAt(0) + 1);
            newMarginglLeft = marginglLeft + 100;
            newMarginglBottom = -400;
          }

          setMarginglLeft(newMarginglLeft);
          setMarginglBottom(newMarginglBottom);

          const g = document.getElementById('pl');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newglH, v: newglV };
        });
      }, i * stepDuration);
    }
  };

  const moveImageblueup = (steps) => {
    const stepDuration = 1000;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPositionbu((prevPosition) => {
          let newbuH = prevPosition.h;
          let newbuV = prevPosition.v;
          let newMarginbuLeft = marginbuLeft + (i + 1) * 100;
          let newMarginbuBottom = marginbuBottom; // Initialize outside conditional

          newbuH = String.fromCharCode(newbuH.charCodeAt(0) + 1);
          console.log(newbuH,newbuV);
          console.log(marginbuLeft)
          if (newbuH >= 'e') {
            newbuH = 'e';
            newbuV = String.fromCharCode(newbuV.charCodeAt(0) - 1);
            newMarginbuBottom =marginbuBottom+ (1) * 100; // Update marginBottom
            newMarginbuLeft = 200; // Assuming it should stop at the edge
            console.log(newbuH,newbuV);
            console.log(newMarginbuBottom);
          }
// if(newV>'5' ){
//   newV='5';
//   newH=String.fromCharCode(newH.charCodeAt(0) + 1);
//   newMarginLeft = marginLeft + (1) * 100;
//   newMarginBottom=-400;
//   console.log(newH,newV);
// }
          setMarginbuLeft(newMarginbuLeft);
          setMarginbuBottom(newMarginbuBottom);

          // Apply the CSS transition effect
          const g = document.getElementById('bpu');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newbuH, v: newbuV }; // Update position
        });

        // console.log(`Position: ${position.h}${position.v}`);
      }, i * stepDuration);
    }
  };
  const moveImageblueright = (steps) => {
    const stepDuration = 1000;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPositionbr((prevPosition) => {
          let newbrH = prevPosition.h;
          let newbrV = prevPosition.v;
          let newMarginbrLeft = marginbrLeft + (i + 1) * 100;
          let newMarginbrBottom = marginbrBottom; // Initialize outside conditional

          newbrH = String.fromCharCode(newbrH.charCodeAt(0) + 1);
          console.log(newbrH,newbrV);
          console.log(marginbrLeft)
          if (newbrH >= 'e') {
            newbrH = 'e';
            newbrV = String.fromCharCode(newbrV.charCodeAt(0) - 1);
            newMarginbrBottom =marginbrBottom+ (1) * 100; // Update marginBottom
            newMarginbrLeft = 200; // Assuming it should stop at the edge
            console.log(newbrH,newbrV);
            console.log(newMarginbrBottom);
          }
// if(newV>'5' ){
//   newV='5';
//   newH=String.fromCharCode(newH.charCodeAt(0) + 1);
//   newMarginLeft = marginLeft + (1) * 100;
//   newMarginBottom=-400;
//   console.log(newH,newV);
// }
          setMarginbrLeft(newMarginbrLeft);
          setMarginbrBottom(newMarginbrBottom);

          // Apply the CSS transition effect
          const g = document.getElementById('bpr');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newbrH, v: newbrV }; // Update position
        });

        // console.log(`Position: ${position.h}${position.v}`);
      }, i * stepDuration);
    }
  };
  const moveImagebluedown = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'c', v: '5' }, // start
      { h: 'd', v: '5' }, // (c,5) to (e,5)
      { h: 'e', v: '5' }, // (d,5) to (e,5)
      { h: 'e', v: '4' }, // (e,5) to (e,1)
      { h: 'e', v: '3' }, // (e,4) to (e,1)
      { h: 'e', v: '2' }, // (e,3) to (e,1)
      { h: 'e', v: '1' }, // (e,2) to (e,1)
      { h: 'd', v: '1' }, // (e,1) to (a,1)
      { h: 'c', v: '1' }, // (d,1) to (a,1)
      { h: 'b', v: '1' }, // (c,1) to (a,1)
      { h: 'a', v: '1' }, // (b,1) to (a,1)
      { h: 'a', v: '2' }, // (a,1) to (a,5)
      { h: 'a', v: '3' }, // (a,2) to (a,5)
      { h: 'a', v: '4' }, // (a,3) to (a,5)
      { h: 'a', v: '5' }, // (a,4) to (a,5)
      { h: 'b', v: '5' }, // (a,5) to (c,5)
      { h: 'b', v: '4' }, // (b,5) to (b,4)
      { h: 'b', v: '3' },
      { h: 'b', v: '2' },
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'd', v: '4' },
      { h: 'c', v: '4' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionbd.h && pos.v === positionbd.v);
    let currentMarginLeft = marginbdLeft;
    let currentMarginBottom = marginbdBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginbdLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginbdBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginbdLeft,newMarginbdBottom);
        setMarginbdLeft(newMarginbdLeft);
        setMarginbdBottom(newMarginbdBottom);
  
        currentMarginLeft = newMarginbdLeft;
        currentMarginBottom = newMarginbdBottom;
  
        setPositionbd(nextPosition);
  
        // Apply the CSS transition effect
        const g = document.getElementById('bpd');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  
  

  const moveImageblueleft = (steps) => {
    const stepDuration = 1000;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setPositionbl((prevPosition) => {
          let newblH = prevPosition.h;
          let newblV = prevPosition.v;
          let newMarginblLeft = marginblLeft + (i + 1) * 100;
          let newMarginblBottom = marginblBottom; // Initialize outside conditional

          newblH = String.fromCharCode(newblH.charCodeAt(0) + 1);
          console.log(newblH,newblV);
          console.log(marginblLeft)
          if (newblH >= 'e') {
            newblH = 'e';
            newblV = String.fromCharCode(newblV.charCodeAt(0) - 1);
            newMarginblBottom =marginblBottom+ (1) * 100; // Update marginBottom
            newMarginblLeft = 200; // Assuming it should stop at the edge
            console.log(newblH,newblV);
            console.log(newMarginblBottom);
          }
// if(newV>'5' ){
//   newV='5';
//   newH=String.fromCharCode(newH.charCodeAt(0) + 1);
//   newMarginLeft = marginLeft + (1) * 100;
//   newMarginBottom=-400;
//   console.log(newH,newV);
// }
          setMarginblLeft(newMarginblLeft);
          setMarginblBottom(newMarginblBottom);

          // Apply the CSS transition effect
          const g = document.getElementById('bpl');
          if (g) {
            g.style.transition = 'margin 0.5s';
          }

          return { h: newblH, v: newblV }; // Update position
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
                    ref={imageguRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pu'
                    id='pu'
                    style={{ marginLeft: `${marginguLeft}px`, marginBottom: `${marginguBottom}px` }}
                    onClick={handlePawnClickgu}
                  />
                 <img
  ref={imagegrRef}
  src={greenPawn}
  alt='Green Pawn'
  className='pr'
  id='pr'
  style={{ marginLeft: `${margingrLeft}px`, marginBottom: `${margingrBottom}px` }}
  onClick={handlePawnClickgr}
/>

                  
                   
                  <img
                    ref={imagegdRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pd'
                    id='pd'
                    style={{ marginLeft: `${margingdLeft}px`, marginBottom: `${margingdBottom}px` }}
                    onClick={handlePawnClickgd}
                  />
               <img
                    ref={imageglRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pl'
                    id='pl'
                    style={{ marginLeft: `${marginglLeft}px`, marginBottom: `${marginglBottom}px` }}
                    onClick={handlePawnClickgl}
                  />
                </div>
              )}
              {h === 'e' && v === '3' && (
                <div className='Parent'>
                  <Bluecircles/>
                  <Strikes />
                  <img
                  ref={imagebuRef}
  src={bluePawn}
  alt='Blue Pawn'
  className='pu'
  id='bpu'
  style={{ marginLeft: `${marginbuLeft}px`, marginBottom: `${marginbuBottom}px` }}
                    onClick={handlePawnClickbu}
/>
<img
                  ref={imagebrRef}
  src={bluePawn}
  alt='Blue Pawn'
  className='pr'
  id='bpr'
  style={{ marginLeft: `${marginbrLeft}px`, marginBottom: `${marginbrBottom}px` }}
                    onClick={handlePawnClickbr}
/>
<img
                  ref={imagebdRef}
  src={bluePawn}
  alt='Blue Pawn'
  className='pd'
  id='bpd'
  style={{ marginLeft: `${marginbdLeft}px`, marginBottom: `${marginbdBottom}px` }}
                    onClick={handlePawnClickbd}
/>
<img
                  ref={imageblRef}
  src={bluePawn}
  alt='Blue Pawn'
  className='pl'
  id='bpl'
  style={{ marginLeft: `${marginblLeft}px`, marginBottom: `${marginblBottom}px` }}
                    onClick={handlePawnClickbl}
/>
                </div>
              )}
              {h === 'c' && v === '1' && (
                <div className='Parent'>
                  <Redcircles/>
                  <Strikes />
                  {/* <img
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
/> */}

                </div>
              )}
              {h === 'c' && v === '5' && (
                <div className='Parent'>
                  <Yellowcircles/>
                  <Strikes />
                  {/* <img
                    // ref={imageRef}
                    src={yellowPawn}
                    alt='Yellow Pawn'
                    className='pu'
                    id='ypu'
                    style={{ marginLeft: `${marginyLeft}px`, marginBottom: `${marginyBottom}px` }}
                  />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pr' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pd' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pl' /> */}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {/* <button className='inputs' onClick={moveImage}>
        Click me
      </button> */}
      {/* <input id='inputfield' ref={inputRef}></input>
      <button onClick={Inputcheckgreen}>Move Green</button>
      <button onClick={Inputcheckblue}>Move Blue</button>
      <button onClick={Inputcheckred}>Move Red</button>
      <button onClick={Inputcheckyellow}>Move Yellow</button> */}
    </div>
  );
}

export default Board;