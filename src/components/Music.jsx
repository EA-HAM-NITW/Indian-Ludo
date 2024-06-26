import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import sampleAudio from '../assets/Ashtachamma_music.mp3';

const unmuteIcon = "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg";
const muteIcon = "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg";

function Music() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio(sampleAudio));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="Audio">
      <img
        src={isMuted ? muteIcon : unmuteIcon}
        alt={isMuted ? "Unmute" : "Mute"}
        onClick={toggleAudio}
        style={{ cursor: 'pointer', width: '50px', height: '50px' }}
      />
    </div>
  );
}

export default Music;
