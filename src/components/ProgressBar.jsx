import React, { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [timerProgress, setTimerProgress] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerProgress((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress className="progress-bar" max={timer} value={timerProgress} />
  );
}
