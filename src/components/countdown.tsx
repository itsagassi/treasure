// components/Countdown.tsx
import React, { useState, useEffect } from 'react';

const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className=' h-screen w-screen flex items-center justify-center'>
      <p>{timeRemaining.days}:</p>
      <p>{timeRemaining.hours}:</p>
      <p>{timeRemaining.minutes}:</p>
      <p>{timeRemaining.seconds}</p>
    </div>
  );
};

export default Countdown;
