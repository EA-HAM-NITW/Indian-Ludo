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

  const [marginruLeft, setMarginruLeft] = useState(0); 
  const [marginruBottom, setMarginruBottom] = useState(0);
  const [marginrrLeft, setMarginrrLeft] = useState(0); 
  const [marginrrBottom, setMarginrrBottom] = useState(0);
  const [marginrdLeft, setMarginrdLeft] = useState(0); 
  const [marginrdBottom, setMarginrdBottom] = useState(0);
  const [marginrlLeft, setMarginrlLeft] = useState(0); 
  const [marginrlBottom, setMarginrlBottom] = useState(0);

  const [marginyuLeft, setMarginyuLeft] = useState(0); 
  const [marginyuBottom, setMarginyuBottom] = useState(0); 
  const [marginyrLeft, setMarginyrLeft] = useState(0); 
  const [marginyrBottom, setMarginyrBottom] = useState(0); 
  const [marginydLeft, setMarginydLeft] = useState(0); 
  const [marginydBottom, setMarginydBottom] = useState(0); 
  const [marginylLeft, setMarginylLeft] = useState(0); 
  const [marginylBottom, setMarginylBottom] = useState(0); 

  const [positiongu, setPositiongu] = useState({ h: 'c', v: '1' }); 
  const [positiongr, setPositiongr] = useState({ h: 'c', v: '1' }); 
  const [positiongd, setPositiongd] = useState({ h: 'c', v: '1' }); 
  const [positiongl, setPositiongl] = useState({ h: 'c', v: '1' });
  // State to track current position, initial position set to 'a' and '3'
  const [positionbu, setPositionbu] = useState({ h: 'c', v: '5' });
  const [positionbr, setPositionbr] = useState({ h: 'c', v: '5' });
  const [positionbd, setPositionbd] = useState({ h: 'c', v: '5' });
  const [positionbl, setPositionbl] = useState({ h: 'c', v: '5' });
  
  const [positionru, setPositionru] = useState({ h: 'a', v: '3' });
  const [positionrr, setPositionrr] = useState({ h: 'a', v: '3' });
  const [positionrd, setPositionrd] = useState({ h: 'a', v: '3' });
  const [positionrl, setPositionrl] = useState({ h: 'a', v: '3' });

  const [positionyu, setPositionyu] = useState({ h: 'e', v: '3' });
  const [positionyr, setPositionyr] = useState({ h: 'e', v: '3' });
  const [positionyd, setPositionyd] = useState({ h: 'e', v: '3' });
  const [positionyl, setPositionyl] = useState({ h: 'e', v: '3' });

  const imageguRef = useRef(null);
  const imagegrRef = useRef(null);
  const imagegdRef = useRef(null);
  const imageglRef = useRef(null);

  const imagebuRef = useRef(null);
  const imagebrRef = useRef(null);
  const imagebdRef = useRef(null);
  const imageblRef = useRef(null);

  const imageruRef = useRef(null);
  const imagerrRef = useRef(null);
  const imagerdRef = useRef(null);
  const imagerlRef = useRef(null);

  const imageyuRef = useRef(null);
  const imageyrRef = useRef(null);
  const imageydRef = useRef(null);
  const imageylRef = useRef(null);

  const inputRef = useRef(null);
  const [value, setValue] = useState(0);

  const handlePawnClickgu = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      console.log(positiongu);
     if(positiongu.h==='c' && positiongu.v==='3')
      return;
    if(positiongu.h==='c' && positiongu.v==='2' && frontGavulluCount!=1)
      return;
    if(positiongu.h==='b' && positiongu.v==='2' && frontGavulluCount>2)
      return;
    if(positiongu.h==='b' && positiongu.v==='3' && frontGavulluCount>3)
      return;
      moveImagegreenup(frontGavulluCount);
    }
  };
  const handlePawnClickgr = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positiongr.h==='c' && positiongr.v==='3')
        return;
      if(positiongr.h==='c' && positiongr.v==='2' && frontGavulluCount!=1)
        return;
      if(positiongr.h==='b' && positiongr.v==='2' && frontGavulluCount>2)
        return;
      if(positiongr.h==='b' && positiongr.v==='3' && frontGavulluCount>3)
        return;
      moveImagegreenright(frontGavulluCount);
    }
  };
  const handlePawnClickgd = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positiongd.h==='c' && positiongd.v==='3')
        return;
      if(positiongd.h==='c' && positiongd.v==='2' && frontGavulluCount!=1)
        return;
      if(positiongd.h==='b' && positiongd.v==='2' && frontGavulluCount>2)
        return;
      if(positiongd.h==='b' && positiongd.v==='3' && frontGavulluCount>3)
        return;
      moveImagegreendown(frontGavulluCount);
    }
  };
  const handlePawnClickgl = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positiongl.h==='c' && positiongl.v==='3')
        return;
      if(positiongl.h==='c' && positiongl.v==='2' && frontGavulluCount!=1)
        return;
      if(positiongl.h==='b' && positiongl.v==='2' && frontGavulluCount>2)
        return;
      if(positiongl.h==='b' && positiongl.v==='3' && frontGavulluCount>3)
        return;
      moveImagegreenleft(frontGavulluCount);
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
  
    let currentIndex = path.findIndex(pos => pos.h === positiongu.h && pos.v === positiongu.v);
    let currentMarginLeft = marginguLeft;
    let currentMarginBottom = marginguBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginguLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginguBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
        console.log(nextPosition.h,nextPosition.v);
        console.log(newMarginguLeft,newMarginguBottom);
        setMarginguLeft(newMarginguLeft);
        setMarginguBottom(newMarginguBottom);
  
        currentMarginLeft = newMarginguLeft;
        currentMarginBottom = newMarginguBottom;
  
        setPositiongu(nextPosition);
  checkCollisionblue(nextPosition,'green');
  checkCollisionred(nextPosition,'green');
  checkCollisionyellow(nextPosition,'green');
        // Apply the CSS transition effect
        const g = document.getElementById('gpu');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  const moveImagegreenright = (steps) => {
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
  
    let currentIndex = path.findIndex(pos => pos.h === positiongr.h && pos.v === positiongr.v);
    let currentMarginLeft = margingrLeft;
    let currentMarginBottom = margingrBottom;
  
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
        checkCollisionblue(nextPosition,'green');
        checkCollisionred(nextPosition,'green');
        checkCollisionyellow(nextPosition,'green');
        // Apply the CSS transition effect
        const g = document.getElementById('gpd');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  const moveImagegreenleft = (steps) => {
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
  
    let currentIndex = path.findIndex(pos => pos.h === positiongl.h && pos.v === positiongl.v);
    let currentMarginLeft = marginglLeft;
    let currentMarginBottom = marginglBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginglLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginglBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
        console.log(nextPosition.h,nextPosition.v);
        console.log(newMarginglLeft,newMarginglBottom);
        setMarginglLeft(newMarginglLeft);
        setMarginglBottom(newMarginglBottom);
  
        currentMarginLeft = newMarginglLeft;
        currentMarginBottom = newMarginglBottom;
  
        setPositiongl(nextPosition);
        checkCollisionblue(nextPosition,'green');
        checkCollisionred(nextPosition,'green');
        checkCollisionyellow(nextPosition,'green');
        // Apply the CSS transition effect
        const g = document.getElementById('gpl');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
 

  const moveImageblueup = (steps) => {
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
  
    let currentIndex = path.findIndex(pos => pos.h === positionbu.h && pos.v === positionbu.v);
    let currentMarginLeft = marginbuLeft;
    let currentMarginBottom = marginbuBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginbuLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginbuBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginbuLeft,newMarginbuBottom);
        setMarginbuLeft(newMarginbuLeft);
        setMarginbuBottom(newMarginbuBottom);
  
        currentMarginLeft = newMarginbuLeft;
        currentMarginBottom = newMarginbuBottom;
  
        setPositionbu(nextPosition);
        checkCollisiongreen(nextPosition,'blue');
        checkCollisionred(nextPosition,'blue');
        checkCollisionyellow(nextPosition,'blue');
        // Apply the CSS transition effect
        const g = document.getElementById('bpu');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  
  const moveImageblueright = (steps) => {
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
  
    let currentIndex = path.findIndex(pos => pos.h === positionbr.h && pos.v === positionbr.v);
    let currentMarginLeft = marginbrLeft;
    let currentMarginBottom = marginbrBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        // Check if the next position is the final position (c,3) and stop after reaching it
        if (nextPosition.h === 'c' && nextPosition.v === '3') {
          setMarginbrLeft(currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100);
          setMarginbrBottom(currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100);
          setPositionbr(nextPosition);
          console.log("Final Position Reached:", nextPosition); // Add console log here
          return;
        }
  
        let newMarginbrLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginbrBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
        
        console.log("Next Position:", nextPosition); // Add console log here
        console.log("New Margin Left:", newMarginbrLeft); // Add console log here
        console.log("New Margin Bottom:", newMarginbrBottom); // Add console log here
        
        setMarginbrLeft(newMarginbrLeft);
        setMarginbrBottom(newMarginbrBottom);
  
        currentMarginLeft = newMarginbrLeft;
        currentMarginBottom = newMarginbrBottom;
        setPositionbr(nextPosition);
        checkCollisiongreen(nextPosition,'blue');
        checkCollisionred(nextPosition,'blue');
        checkCollisionyellow(nextPosition,'blue');
        // Apply the CSS transition effect
        const g = document.getElementById('bpr');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
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
        checkCollisiongreen(nextPosition,'blue');
        checkCollisionred(nextPosition,'blue');
        checkCollisionyellow(nextPosition,'blue');
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
  
    let currentIndex = path.findIndex(pos => pos.h === positionbl.h && pos.v === positionbl.v);
    let currentMarginLeft = marginblLeft;
    let currentMarginBottom = marginblBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        // Check if the next position is the final position (c,3) and stop after reaching it
        if (nextPosition.h === 'c' && nextPosition.v === '3') {
          setMarginblLeft(currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100);
          setMarginblBottom(currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100);
          setPositionbl(nextPosition);
          return;
        }
  
        let newMarginblLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginblBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
        
        console.log(nextPosition.h, nextPosition.v);
        console.log(newMarginblLeft, newMarginblBottom);
        
        setMarginblLeft(newMarginblLeft);
        setMarginblBottom(newMarginblBottom);
  
        currentMarginLeft = newMarginblLeft;
        currentMarginBottom = newMarginblBottom;
  
        setPositionbl(nextPosition);
        checkCollisiongreen(nextPosition,'blue');
        checkCollisionred(nextPosition,'blue');
        checkCollisionyellow(nextPosition,'blue');
        // Apply the CSS transition effect
        const g = document.getElementById('bpl');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  
  const moveImageredup = (steps) => {
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
  
  const moveImageredleft = (steps) => {
    const stepDuration = 1000;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginrlLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginrlBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginrlLeft,newMarginrlBottom);
        setMarginrlLeft(newMarginrlLeft);
        setMarginrlBottom(newMarginrlBottom);
  
        currentMarginLeft = newMarginrlLeft;
        currentMarginBottom = newMarginrlBottom;
  
        setPositionrl(nextPosition);
        checkCollisiongreen(nextPosition,'red');
        checkCollisionblue(nextPosition,'red');
        checkCollisionyellow(nextPosition,'red');
        // Apply the CSS transition effect
        const g = document.getElementById('rpl');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };

  const moveImageyellowup = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'e', v: '3' }, // start
      { h: 'e', v: '2' }, // (c,5) to (e,5)
      { h: 'e', v: '1' }, // (d,5) to (e,5)
      { h: 'd', v: '1' }, // (e,5) to (e,1)
      { h: 'c', v: '1' }, // (e,4) to (e,1)
      { h: 'b', v: '1' }, // (e,3) to (e,1)
      { h: 'a', v: '1' }, // (e,2) to (e,1)
      { h: 'a', v: '2' }, // (e,1) to (a,1)
      { h: 'a', v: '3' }, // (d,1) to (a,1)
      { h: 'a', v: '4' }, // (c,1) to (a,1)
      { h: 'a', v: '5' }, // (b,1) to (a,1)
      { h: 'b', v: '5' }, // (a,1) to (a,5)
      { h: 'c', v: '5' }, // (a,2) to (a,5)
      { h: 'd', v: '5' }, // (a,3) to (a,5)
      { h: 'e', v: '5' }, // (a,4) to (a,5)
      { h: 'e', v: '4' }, // (a,5) to (c,5)
      { h: 'd', v: '4' }, // (b,5) to (b,4)
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'b', v: '2' },
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionyu.h && pos.v === positionyu.v);
    let currentMarginLeft = marginyuLeft;
    let currentMarginBottom = marginyuBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginyuLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginyuBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginyuLeft,newMarginyuBottom);
        setMarginyuLeft(newMarginyuLeft);
        setMarginyuBottom(newMarginyuBottom);
  
        currentMarginLeft = newMarginyuLeft;
        currentMarginBottom = newMarginyuBottom;
  
        setPositionyu(nextPosition);
        checkCollisiongreen(nextPosition,'yellow');
        checkCollisionblue(nextPosition,'yellow');
        checkCollisionred(nextPosition,'yellow');
        // Apply the CSS transition effect
        const g = document.getElementById('ypu');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };

  const moveImageyellowright = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'e', v: '3' }, // start
      { h: 'e', v: '2' }, // (c,5) to (e,5)
      { h: 'e', v: '1' }, // (d,5) to (e,5)
      { h: 'd', v: '1' }, // (e,5) to (e,1)
      { h: 'c', v: '1' }, // (e,4) to (e,1)
      { h: 'b', v: '1' }, // (e,3) to (e,1)
      { h: 'a', v: '1' }, // (e,2) to (e,1)
      { h: 'a', v: '2' }, // (e,1) to (a,1)
      { h: 'a', v: '3' }, // (d,1) to (a,1)
      { h: 'a', v: '4' }, // (c,1) to (a,1)
      { h: 'a', v: '5' }, // (b,1) to (a,1)
      { h: 'b', v: '5' }, // (a,1) to (a,5)
      { h: 'c', v: '5' }, // (a,2) to (a,5)
      { h: 'd', v: '5' }, // (a,3) to (a,5)
      { h: 'e', v: '5' }, // (a,4) to (a,5)
      { h: 'e', v: '4' }, // (a,5) to (c,5)
      { h: 'd', v: '4' }, // (b,5) to (b,4)
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'b', v: '2' },
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionyr.h && pos.v === positionyr.v);
    let currentMarginLeft = marginyrLeft;
    let currentMarginBottom = marginyrBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginyrLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginyrBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginyrLeft,newMarginyrBottom);
        setMarginyrLeft(newMarginyrLeft);
        setMarginyrBottom(newMarginyrBottom);
  
        currentMarginLeft = newMarginyrLeft;
        currentMarginBottom = newMarginyrBottom;
  
        setPositionyr(nextPosition);
        checkCollisiongreen(nextPosition,'yellow');
        checkCollisionblue(nextPosition,'yellow');
        checkCollisionred(nextPosition,'yellow');
        // Apply the CSS transition effect
        const g = document.getElementById('ypr');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };

  const moveImageyellowdown = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'e', v: '3' }, // start
      { h: 'e', v: '2' }, // (c,5) to (e,5)
      { h: 'e', v: '1' }, // (d,5) to (e,5)
      { h: 'd', v: '1' }, // (e,5) to (e,1)
      { h: 'c', v: '1' }, // (e,4) to (e,1)
      { h: 'b', v: '1' }, // (e,3) to (e,1)
      { h: 'a', v: '1' }, // (e,2) to (e,1)
      { h: 'a', v: '2' }, // (e,1) to (a,1)
      { h: 'a', v: '3' }, // (d,1) to (a,1)
      { h: 'a', v: '4' }, // (c,1) to (a,1)
      { h: 'a', v: '5' }, // (b,1) to (a,1)
      { h: 'b', v: '5' }, // (a,1) to (a,5)
      { h: 'c', v: '5' }, // (a,2) to (a,5)
      { h: 'd', v: '5' }, // (a,3) to (a,5)
      { h: 'e', v: '5' }, // (a,4) to (a,5)
      { h: 'e', v: '4' }, // (a,5) to (c,5)
      { h: 'd', v: '4' }, // (b,5) to (b,4)
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'b', v: '2' },
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionyd.h && pos.v === positionyd.v);
    let currentMarginLeft = marginydLeft;
    let currentMarginBottom = marginydBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginydLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginydBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginydLeft,newMarginydBottom);
        setMarginydLeft(newMarginydLeft);
        setMarginydBottom(newMarginydBottom);
  
        currentMarginLeft = newMarginydLeft;
        currentMarginBottom = newMarginydBottom;
  
        setPositionyd(nextPosition);
        checkCollisiongreen(nextPosition,'yellow');
        checkCollisionblue(nextPosition,'yellow');
        checkCollisionred(nextPosition,'yellow');
        // Apply the CSS transition effect
        const g = document.getElementById('ypd');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };

  const moveImageyellowleft = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'e', v: '3' }, // start
      { h: 'e', v: '2' }, // (c,5) to (e,5)
      { h: 'e', v: '1' }, // (d,5) to (e,5)
      { h: 'd', v: '1' }, // (e,5) to (e,1)
      { h: 'c', v: '1' }, // (e,4) to (e,1)
      { h: 'b', v: '1' }, // (e,3) to (e,1)
      { h: 'a', v: '1' }, // (e,2) to (e,1)
      { h: 'a', v: '2' }, // (e,1) to (a,1)
      { h: 'a', v: '3' }, // (d,1) to (a,1)
      { h: 'a', v: '4' }, // (c,1) to (a,1)
      { h: 'a', v: '5' }, // (b,1) to (a,1)
      { h: 'b', v: '5' }, // (a,1) to (a,5)
      { h: 'c', v: '5' }, // (a,2) to (a,5)
      { h: 'd', v: '5' }, // (a,3) to (a,5)
      { h: 'e', v: '5' }, // (a,4) to (a,5)
      { h: 'e', v: '4' }, // (a,5) to (c,5)
      { h: 'd', v: '4' }, // (b,5) to (b,4)
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'b', v: '2' },
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionyl.h && pos.v === positionyl.v);
    let currentMarginLeft = marginylLeft;
    let currentMarginBottom = marginylBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginylLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginylBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginylLeft,newMarginylBottom);
        setMarginylLeft(newMarginylLeft);
        setMarginylBottom(newMarginylBottom);
  
        currentMarginLeft = newMarginylLeft;
        currentMarginBottom = newMarginylBottom;
  
        setPositionyl(nextPosition);
        checkCollisiongreen(nextPosition,'yellow');
        checkCollisionblue(nextPosition,'yellow');
        checkCollisionred(nextPosition,'yellow');
        // Apply the CSS transition effect
        const g = document.getElementById('ypl');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
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
                   <img
                   ref={imageruRef}
  src={redPawn}
  alt='Red Pawn'
  className='pu'
  id='rpu'
  style={{ marginLeft: `${marginruLeft}px`, marginBottom: `${marginruBottom}px` }}
  onClick={handlePawnClickru}
/>
<img
                   ref={imagerrRef}
  src={redPawn}
  alt='Red Pawn'
  className='pr'
  id='rpr'
  style={{ marginLeft: `${marginrrLeft}px`, marginBottom: `${marginrrBottom}px` }}
  onClick={handlePawnClickrr}
/>
<img
                   ref={imagerdRef}
  src={redPawn}
  alt='Red Pawn'
  className='pd'
  id='rpd'
  style={{ marginLeft: `${marginrdLeft}px`, marginBottom: `${marginrdBottom}px` }}
  onClick={handlePawnClickrd}
/>
<img
                   ref={imagerlRef}
  src={redPawn}
  alt='Red Pawn'
  className='pl'
  id='rpl'
  style={{ marginLeft: `${marginrlLeft}px`, marginBottom: `${marginrlBottom}px` }}
  onClick={handlePawnClickrl}
/>

                </div>
              )}
              {h === 'c' && v === '5' && (
                <div className='Parent'>
                  <Yellowcircles/>
                  <Strikes />
                  <img
                   ref={imageyuRef}
  src={yellowPawn}
  alt='Yellow Pawn'
  className='pu'
  id='ypu'
  style={{ marginLeft: `${marginyuLeft}px`, marginBottom: `${marginyuBottom}px` }}
  onClick={handlePawnClickyu}
/>
<img
                   ref={imageyrRef}
  src={yellowPawn}
  alt='Yellow Pawn'
  className='pr'
  id='ypr'
  style={{ marginLeft: `${marginyrLeft}px`, marginBottom: `${marginyrBottom}px` }}
  onClick={handlePawnClickyr}
/>
<img
                   ref={imageydRef}
  src={yellowPawn}
  alt='Yellow Pawn'
  className='pd'
  id='ypd'
  style={{ marginLeft: `${marginydLeft}px`, marginBottom: `${marginydBottom}px` }}
  onClick={handlePawnClickyd}
/>
<img
                   ref={imageylRef}
  src={yellowPawn}
  alt='Yellow Pawn'
  className='pl'
  id='ypl'
  style={{ marginLeft: `${marginylLeft}px`, marginBottom: `${marginylBottom}px` }}
  onClick={handlePawnClickyl}
/>
                
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
