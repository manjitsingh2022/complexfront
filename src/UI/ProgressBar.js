import React, { useState, useEffect } from 'react';

const ProgressBar = ({ duration }) => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + (100 / duration));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress, duration]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
