import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import sampleAudio from '../assets/Ashtachamma_music.mp3';

const unmuteIcon = "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg";
const muteIcon = "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg";

function Music() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(new Audio(sampleAudio));
  const [isAudioInitialized, setIsAudioInitialized] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!isAudioInitialized) {
      audio.play();
      setIsAudioInitialized(true);
    } else if (isMuted) {
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
