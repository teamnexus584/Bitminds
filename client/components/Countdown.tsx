import React, { useState, useEffect } from 'react';

interface CountdownProps {
  className?: string;
}

export default function Countdown({ className = '' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="text-xs font-semibold text-red-600">⏰ Offer ends in:</div>
      <div className="flex gap-1">
        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] text-center">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-red-600 font-bold text-xs">:</div>
        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] text-center">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-red-600 font-bold text-xs">:</div>
        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] text-center">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}