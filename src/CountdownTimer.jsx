import React, { useState, useEffect } from 'react';

function CountdownTimer({ minutes, seconds }) {
  const [remainingTime, setRemainingTime] = useState({
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    let interval;

    if (remainingTime.minutes > 0 || remainingTime.seconds > 0) {
      interval = setInterval(() => {
        if (remainingTime.seconds === 0) {
          if (remainingTime.minutes === 0) {
            clearInterval(interval);
            // You can add a callback function here to execute when the countdown ends.
          } else {
            setRemainingTime({
              minutes: remainingTime.minutes - 1,
              seconds: 59,
            });
          }
        } else {
          setRemainingTime({
            minutes: remainingTime.minutes,
            seconds: remainingTime.seconds - 1,
          });
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const formattedMinutes = remainingTime.minutes < 10 ? `0${remainingTime.minutes}` : remainingTime.minutes;
  const formattedSeconds = remainingTime.seconds < 10 ? `0${remainingTime.seconds}` : remainingTime.seconds;

  const numberStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    animation: 'bounce 1s ease-in-out infinite', // Apply the bounce animation
  };

  return (
    <div>
      <span className="countdown-number" style={numberStyle} key={formattedMinutes}>
        {formattedMinutes}
      </span>
      :
      <span className="countdown-number" style={numberStyle} key={formattedSeconds}>
        {formattedSeconds}
      </span>
    </div>
  );
}

export default CountdownTimer;
