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
  const handlePawnClickbu = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionbu.h==='c' && positionbu.v==='3')
        return;
      if(positionbu.h==='c' && positionbu.v==='4' && frontGavulluCount!=1)
        return;
      if(positionbu.h==='d' && positionbu.v==='4' && frontGavulluCount>2)
        return;
      if(positionbu.h==='d' && positionbu.v==='3' && frontGavulluCount>3)
        return;
      moveImageblueup(frontGavulluCount);
    }
  };
  const handlePawnClickbr = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionbr.h==='c' && positionbr.v==='3')
        return;
      if(positionbr.h==='c' && positionbr.v==='4' && frontGavulluCount!=1)
        return;
      if(positionbr.h==='d' && positionbr.v==='4' && frontGavulluCount>2)
        return;
      if(positionbr.h==='d' && positionbr.v==='3' && frontGavulluCount>3)
        return;
      moveImageblueright(frontGavulluCount);
     
    }
  };
  const handlePawnClickbd = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionbd.h==='c' && positionbd.v==='3')
        return;
      if(positionbd.h==='c' && positionbd.v==='4' && frontGavulluCount!=1)
        return;
      if(positionbd.h==='d' && positionbd.v==='4' && frontGavulluCount>2)
        return;
      if(positionbd.h==='d' && positionbd.v==='3' && frontGavulluCount>3)
        return;
      moveImagebluedown(frontGavulluCount);
      console.log(positionbd);
    }
  };
  const handlePawnClickbl = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionbl.h==='c' && positionbl.v==='3')
        return;
      if(positionbl.h==='c' && positionbl.v==='4' && frontGavulluCount!=1)
        return;
      if(positionbl.h==='d' && positionbl.v==='4' && frontGavulluCount>2)
        return;
      if(positionbl.h==='d' && positionbl.v==='3' && frontGavulluCount>3)
        return;
      moveImageblueleft(frontGavulluCount);
    }
  };
  const handlePawnClickru = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionru.h==='c' && positionru.v==='3')
        return;
      if(positionru.h==='b' && positionru.v==='3' && frontGavulluCount!=1)
        return;
      if(positionru.h==='b' && positionru.v==='4' && frontGavulluCount>2)
        return;
      if(positionru.h==='c' && positionru.v==='4' && frontGavulluCount>3)
        return;
      moveImageredup(frontGavulluCount);
    }
  };
  const handlePawnClickrr = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionrr.h==='c' && positionrr.v==='3')
        return;
      if(positionrr.h==='b' && positionrr.v==='3' && frontGavulluCount!=1)
        return;
      if(positionru.h==='b' && positionrr.v==='4' && frontGavulluCount>2)
        return;
      if(positionrr.h==='c' && positionrr.v==='4' && frontGavulluCount>3)
        return;
      moveImageredright(frontGavulluCount);
    }
  };
  const handlePawnClickrd = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionrd.h==='c' && positionrd.v==='3')
        return;
      if(positionrd.h==='b' && positionrd.v==='3' && frontGavulluCount!=1)
        return;
      if(positionrd.h==='b' && positionrd.v==='4' && frontGavulluCount>2)
        return;
      if(positionrd.h==='c' && positionrd.v==='4' && frontGavulluCount>3)
        return;
      moveImagereddown(frontGavulluCount);
    }
  };
  const handlePawnClickrl = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionrl.h==='c' && positionrl.v==='3')
        return;
      if(positionru.h==='b' && positionru.v==='3' && frontGavulluCount!=1)
        return;
      if(positionrl.h==='b' && positionrl.v==='4' && frontGavulluCount>2)
        return;
      if(positionrl.h==='c' && positionrl.v==='4' && frontGavulluCount>3)
        return;
      moveImageredleft(frontGavulluCount);
    }
  };
  const handlePawnClickyu = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionyu.h==='c' && positionyu.v==='3')
        return;
      if(positionyu.h==='d' && positionyu.v==='3' && frontGavulluCount!=1)
        return;
      if(positionyu.h==='d' && positionyu.v==='2' && frontGavulluCount>2)
        return;
      if(positionyu.h==='c' && positionyu.v==='2' && frontGavulluCount>3)
        return;
      moveImageyellowup(frontGavulluCount);
    }
  };
  const handlePawnClickyr = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionyr.h==='c' && positionyr.v==='3')
        return;
      if(positionyr.h==='d' && positionyr.v==='3' && frontGavulluCount!=1)
        return;
      if(positionyr.h==='d' && positionyr.v==='2' && frontGavulluCount>2)
        return;
      if(positionyr.h==='c' && positionyr.v==='2' && frontGavulluCount>3)
        return;
      moveImageyellowright(frontGavulluCount);
    }
  };
  const handlePawnClickyd = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionyd.h==='c' && positionyd.v==='3')
        return;
      if(positionyd.h==='d' && positionyd.v==='3' && frontGavulluCount!=1)
        return;
      if(positionyd.h==='d' && positionyd.v==='2' && frontGavulluCount>2)
        return;
      if(positionyd.h==='c' && positionyd.v==='2' && frontGavulluCount>3)
        return;
      moveImageyellowdown(frontGavulluCount);
    }
  };
  const handlePawnClickyl = () => {
    if (frontGavulluCount > 0) {
      console.log(frontGavulluCount);
      if(positionyl.h==='c' && positionyl.v==='3')
        return;
      if(positionyl.h==='d' && positionyl.v==='3' && frontGavulluCount!=1)
        return;
      if(positionyl.h==='d' && positionyl.v==='2' && frontGavulluCount>2)
        return;
      if(positionyl.h==='c' && positionyl.v==='2' && frontGavulluCount>3)
        return;
      moveImageyellowleft(frontGavulluCount);
    }
  };
 
   const resetGreenPawnup = () => {
    setPositiongu({ h: 'c', v: '1' });
    setMarginguLeft(0);
    setMarginguBottom(0);
  };
  const resetGreenPawnright = () => {
    setPositiongr({ h: 'c', v: '1' });
    setMargingrLeft(0);
    setMargingrBottom(0);
  };
  const resetGreenPawndown = () => {
    setPositiongd({ h: 'c', v: '1' });
    setMargingdLeft(0);
    setMargingdBottom(0);
  };
  const resetGreenPawnleft = () => {
    setPositiongl({ h: 'c', v: '1' });
    setMarginglLeft(0);
    setMarginglBottom(0);
  };
  const resetBluePawnup = () => {
    setPositionbu({ h: 'c', v: '5' });
    setMarginbuLeft(0);
    setMarginbuBottom(0);
  };
  const resetBluePawnright = () => {
    setPositionbr({ h: 'c', v: '5' });
    setMarginbrLeft(0);
    setMarginbrBottom(0);
  };
  const resetBluePawndown = () => {
    setPositionbd({ h: 'c', v: '5' });
    setMarginbdLeft(0);
    setMarginbdBottom(0);
  };
  const resetBluePawnleft = () => {
    setPositionbl({ h: 'c', v: '5' });
    setMarginblLeft(0);
    setMarginblBottom(0);
  };
  const resetRedPawnup = () => {
    setPositionru({ h: 'a', v: '3' });
    setMarginruLeft(0);
    setMarginruBottom(0);
  };
  const resetRedPawnright = () => {
    setPositionrr({ h: 'a', v: '3' });
    setMarginrrLeft(0);
    setMarginrrBottom(0);
  };
  const resetRedPawndown = () => {
    setPositionrd({ h: 'a', v: '3' });
    setMarginrdLeft(0);
    setMarginrdBottom(0);
  };
  const resetRedPawnleft = () => {
    setPositionrl({ h: 'a', v: '3' });
    setMarginrlLeft(0);
    setMarginrlBottom(0);
  };
  const resetYellowPawnup = () => {
    setPositionyu({ h: 'e', v: '3' });
    setMarginyuLeft(0);
    setMarginyuBottom(0);
  };
  const resetYellowPawnright = () => {
    setPositionyr({ h: 'e', v: '3' });
    setMarginyrLeft(0);
    setMarginyrBottom(0);
  };
  const resetYellowPawndown = () => {
    setPositionyd({ h: 'e', v: '3' });
    setMarginydLeft(0);
    setMarginydBottom(0);
  };
  const resetYellowPawnleft = () => {
    setPositionyl({ h: 'e', v: '3' });
    setMarginylLeft(0);
    setMarginylBottom(0);
  };
  const checkCollisiongreen = (newPosition, currentPawn) => {
    if (newPosition.h === positiongu.h && newPosition.v === positiongu.v && currentPawn !== 'green' ) 
     {if(newPosition.h==='c' && newPosition.v==='3')
      return;
      resetGreenPawnup();
    }
   if (newPosition.h === positiongr.h && newPosition.v === positiongr.v && currentPawn !== 'green')
      {if(newPosition.h==='c' && newPosition.v==='3')
        return;
        resetGreenPawnright();
      }
      if (newPosition.h === positiongd.h && newPosition.v === positiongd.v && currentPawn !== 'green')
        {if(newPosition.h==='c' && newPosition.v==='3')
          return;
          resetGreenPawndown();
        }
        if (newPosition.h === positiongl.h && newPosition.v === positiongl.v && currentPawn !== 'green')
          {if(newPosition.h==='c' && newPosition.v==='3')
            return;
            resetGreenPawnleft();
          }
  };
  const checkCollisionblue = (newPosition, currentPawn) => {
    if (newPosition.h === positionbu.h && newPosition.v === positionbu.v && currentPawn !== 'blue') 
     {if(newPosition.h==='c' && newPosition.v==='3')
      return;
      resetBluePawnup();
    }
   if (newPosition.h === positionbr.h && newPosition.v === positionbr.v && currentPawn !== 'blue')
      {if(newPosition.h==='c' && newPosition.v==='3')
        return;
        resetBluePawnright();
      }
      if (newPosition.h === positionbd.h && newPosition.v === positionbd.v && currentPawn !== 'blue')
        {if(newPosition.h==='c' && newPosition.v==='3')
          return;
          resetBluePawndown();
        }
        if (newPosition.h === positionbl.h && newPosition.v === positionbl.v && currentPawn !== 'blue')
          {if(newPosition.h==='c' && newPosition.v==='3')
            return;
            resetBluePawnleft();
          }
  };
  const checkCollisionred = (newPosition, currentPawn) => {
    if (newPosition.h === positionru.h && newPosition.v === positionru.v && currentPawn !== 'red') 
     {if(newPosition.h==='c' && newPosition.v==='3')
      return;
      resetRedPawnup();
    }
   if (newPosition.h === positionrr.h && newPosition.v === positionrr.v && currentPawn !== 'red')
      {if(newPosition.h==='c' && newPosition.v==='3')
        return;
        resetRedPawnright();
      }
      if (newPosition.h === positionrd.h && newPosition.v === positionrd.v && currentPawn !== 'red')
        {if(newPosition.h==='c' && newPosition.v==='3')
          return;
          resetRedPawndown();
        }
        if (newPosition.h === positionrl.h && newPosition.v === positionrl.v && currentPawn !== 'red')
          {if(newPosition.h==='c' && newPosition.v==='3')
            return;
            resetRedPawnleft();
          }
  };
  const checkCollisionyellow = (newPosition, currentPawn) => {
    if (newPosition.h === positionyu.h && newPosition.v === positionyu.v && currentPawn !== 'yellow') 
     {if(newPosition.h==='c' && newPosition.v==='3')
      return;
      resetYellowPawnup();
    }
   if (newPosition.h === positionyr.h && newPosition.v === positionyr.v && currentPawn !== 'yellow')
      {if(newPosition.h==='c' && newPosition.v==='3')
        return;
        resetYellowPawnright();
      }
      if (newPosition.h === positionyd.h && newPosition.v === positionyd.v && currentPawn !== 'yellow')
        {if(newPosition.h==='c' && newPosition.v==='3')
          return;
          resetYellowPawndown();
        }
        if (newPosition.h === positionyl.h && newPosition.v === positionyl.v && currentPawn !== 'yellow')
          {if(newPosition.h==='c' && newPosition.v==='3')
            return;
            resetYellowPawnleft();
          }
  };
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
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMargingrLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMargingrBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
        console.log(nextPosition.h,nextPosition.v);
        console.log(newMargingrLeft,newMargingrBottom);
        setMargingrLeft(newMargingrLeft);
        setMargingrBottom(newMargingrBottom);
  
        currentMarginLeft = newMargingrLeft;
        currentMarginBottom = newMargingrBottom;
        setPositiongr(nextPosition);
        checkCollisionblue(nextPosition,'green');
        checkCollisionred(nextPosition,'green');
        checkCollisionyellow(nextPosition,'green');
        // Apply the CSS transition effect
        const g = document.getElementById('gpr');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
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
  
    const path = [
      { h: 'a', v: '3' }, // start
      { h: 'a', v: '4' }, // (c,5) to (e,5)
      { h: 'a', v: '5' }, // (d,5) to (e,5)
      { h: 'b', v: '5' }, // (e,5) to (e,1)
      { h: 'c', v: '5' }, // (e,4) to (e,1)
      { h: 'd', v: '5' }, // (e,3) to (e,1)
      { h: 'e', v: '5' }, // (e,2) to (e,1)
      { h: 'e', v: '4' }, // (e,1) to (a,1)
      { h: 'e', v: '3' }, // (d,1) to (a,1)
      { h: 'e', v: '2' }, // (c,1) to (a,1)
      { h: 'e', v: '1' }, // (b,1) to (a,1)
      { h: 'd', v: '1' }, // (a,1) to (a,5)
      { h: 'c', v: '1' }, // (a,2) to (a,5)
      { h: 'b', v: '1' }, // (a,3) to (a,5)
      { h: 'a', v: '1' }, // (a,4) to (a,5)
      { h: 'a', v: '2' }, // (a,5) to (c,5)
      { h: 'b', v: '2' }, // (b,5) to (b,4)
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'd', v: '4' },
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionru.h && pos.v === positionru.v);
    let currentMarginLeft = marginruLeft;
    let currentMarginBottom = marginruBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginruLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginruBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginruLeft,newMarginruBottom);
        setMarginruLeft(newMarginruLeft);
        setMarginruBottom(newMarginruBottom);
  
        currentMarginLeft = newMarginruLeft;
        currentMarginBottom = newMarginruBottom;
  
        setPositionru(nextPosition);
        checkCollisiongreen(nextPosition,'red');
        checkCollisionblue(nextPosition,'red');
        checkCollisionyellow(nextPosition,'red');
        // Apply the CSS transition effect
        const g = document.getElementById('rpu');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };

  const moveImageredright = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'a', v: '3' }, // start
      { h: 'a', v: '4' }, // (c,5) to (e,5)
      { h: 'a', v: '5' }, // (d,5) to (e,5)
      { h: 'b', v: '5' }, // (e,5) to (e,1)
      { h: 'c', v: '5' }, // (e,4) to (e,1)
      { h: 'd', v: '5' }, // (e,3) to (e,1)
      { h: 'e', v: '5' }, // (e,2) to (e,1)
      { h: 'e', v: '4' }, // (e,1) to (a,1)
      { h: 'e', v: '3' }, // (d,1) to (a,1)
      { h: 'e', v: '2' }, // (c,1) to (a,1)
      { h: 'e', v: '1' }, // (b,1) to (a,1)
      { h: 'd', v: '1' }, // (a,1) to (a,5)
      { h: 'c', v: '1' }, // (a,2) to (a,5)
      { h: 'b', v: '1' }, // (a,3) to (a,5)
      { h: 'a', v: '1' }, // (a,4) to (a,5)
      { h: 'a', v: '2' }, // (a,5) to (c,5)
      { h: 'b', v: '2' }, // (b,5) to (b,4)
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'd', v: '4' },
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionrr.h && pos.v === positionrr.v);
    let currentMarginLeft = marginrrLeft;
    let currentMarginBottom = marginrrBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginrrLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginrrBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginrrLeft,newMarginrrBottom);
        setMarginrrLeft(newMarginrrLeft);
        setMarginrrBottom(newMarginrrBottom);
  
        currentMarginLeft = newMarginrrLeft;
        currentMarginBottom = newMarginrrBottom;
  
        setPositionrr(nextPosition);
        checkCollisiongreen(nextPosition,'red');
        checkCollisionblue(nextPosition,'red');
        checkCollisionyellow(nextPosition,'red');
        // Apply the CSS transition effect
        const g = document.getElementById('rpr');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };

  const moveImagereddown = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'a', v: '3' }, // start
      { h: 'a', v: '4' }, // (c,5) to (e,5)
      { h: 'a', v: '5' }, // (d,5) to (e,5)
      { h: 'b', v: '5' }, // (e,5) to (e,1)
      { h: 'c', v: '5' }, // (e,4) to (e,1)
      { h: 'd', v: '5' }, // (e,3) to (e,1)
      { h: 'e', v: '5' }, // (e,2) to (e,1)
      { h: 'e', v: '4' }, // (e,1) to (a,1)
      { h: 'e', v: '3' }, // (d,1) to (a,1)
      { h: 'e', v: '2' }, // (c,1) to (a,1)
      { h: 'e', v: '1' }, // (b,1) to (a,1)
      { h: 'd', v: '1' }, // (a,1) to (a,5)
      { h: 'c', v: '1' }, // (a,2) to (a,5)
      { h: 'b', v: '1' }, // (a,3) to (a,5)
      { h: 'a', v: '1' }, // (a,4) to (a,5)
      { h: 'a', v: '2' }, // (a,5) to (c,5)
      { h: 'b', v: '2' }, // (b,5) to (b,4)
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'd', v: '4' },
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionrd.h && pos.v === positionrd.v);
    let currentMarginLeft = marginrdLeft;
    let currentMarginBottom = marginrdBottom;
  
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % path.length;
        let nextPosition = path[currentIndex];
  
        let newMarginrdLeft = currentMarginLeft + (nextPosition.h.charCodeAt(0) - path[currentIndex - 1].h.charCodeAt(0)) * 100;
        let newMarginrdBottom = currentMarginBottom - (nextPosition.v - path[currentIndex - 1].v) * 100;
  console.log(nextPosition.h,nextPosition.v);
  console.log(newMarginrdLeft,newMarginrdBottom);
        setMarginrdLeft(newMarginrdLeft);
        setMarginrdBottom(newMarginrdBottom);
  
        currentMarginLeft = newMarginrdLeft;
        currentMarginBottom = newMarginrdBottom;
  
        setPositionrd(nextPosition);
        checkCollisiongreen(nextPosition,'red');
        checkCollisionblue(nextPosition,'red');
        checkCollisionyellow(nextPosition,'red');
        // Apply the CSS transition effect
        const g = document.getElementById('rpd');
        if (g) {
          g.style.transition = 'margin 0.5s';
        }
      }, i * stepDuration);
    }
  };
  
  const moveImageredleft = (steps) => {
    const stepDuration = 1000;
  
    const path = [
      { h: 'a', v: '3' }, // start
      { h: 'a', v: '4' }, // (c,5) to (e,5)
      { h: 'a', v: '5' }, // (d,5) to (e,5)
      { h: 'b', v: '5' }, // (e,5) to (e,1)
      { h: 'c', v: '5' }, // (e,4) to (e,1)
      { h: 'd', v: '5' }, // (e,3) to (e,1)
      { h: 'e', v: '5' }, // (e,2) to (e,1)
      { h: 'e', v: '4' }, // (e,1) to (a,1)
      { h: 'e', v: '3' }, // (d,1) to (a,1)
      { h: 'e', v: '2' }, // (c,1) to (a,1)
      { h: 'e', v: '1' }, // (b,1) to (a,1)
      { h: 'd', v: '1' }, // (a,1) to (a,5)
      { h: 'c', v: '1' }, // (a,2) to (a,5)
      { h: 'b', v: '1' }, // (a,3) to (a,5)
      { h: 'a', v: '1' }, // (a,4) to (a,5)
      { h: 'a', v: '2' }, // (a,5) to (c,5)
      { h: 'b', v: '2' }, // (b,5) to (b,4)
      { h: 'c', v: '2' },
      { h: 'd', v: '2' },
      { h: 'd', v: '3' },
      { h: 'd', v: '4' },
      { h: 'c', v: '4' },
      { h: 'b', v: '4' },
      { h: 'b', v: '3' },
      { h: 'c', v: '3' },
    ];
  
    let currentIndex = path.findIndex(pos => pos.h === positionrl.h && pos.v === positionrl.v);
    let currentMarginLeft = marginrlLeft;
    let currentMarginBottom = marginrlBottom;
  
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
