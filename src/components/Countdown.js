import React, { useState, useEffect } from 'react';
import { useInterval } from '../utils/UseInterval';
import { getTimeRemaining } from '../utils/GetTimeRemaining';

function Countdown({ targetDate }) {
  const [countdownDate, setCountdownDate] = useState(new Date(targetDate));
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(countdownDate));
  }, 1000);

  return (
    <div>
      <div className="countdown-wrapper">
        <div className="time-section">
          <div className="time">{timeRemaining.days || '0'}</div>
          <small className="time-text">Days</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{timeRemaining.hours || '00'}</div>
          <small className="time-text">Hours</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{timeRemaining.minutes || '00'}</div>
          <small className="time-text">Minutes</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{timeRemaining.seconds || '00'}</div>
          <small className="time-text">Seconds</small>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
