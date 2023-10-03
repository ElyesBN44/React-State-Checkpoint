import React, { useState, useEffect } from 'react';

function Tim() {
    
    const [seconds, setSeconds,] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval;
  
      if (isActive && seconds > 0) {
        interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
      } else if (seconds === 0) {
        clearInterval(interval);
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [isActive, seconds]);
  
    const toggleTimer = () => {
      setIsActive(!isActive);
    };
  
    const resetTimer = () => {
      setSeconds(0);
      setIsActive(false);
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Timer</h1>
          <p>Seconds: {seconds}</p>
          <div className="button-container">
            <button onClick={toggleTimer}>
              {isActive ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </header>
      </div>
    );
  }
  
  export default Tim;
  