import { useState, useEffect } from 'react';
export const useTimer = (initialValue) => {
  const [timer, setTimer] = useState(initialValue);

  useEffect(() => {
    if (timer <= 0) return;

    const timerID = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, [timer]);

  return [timer, setTimer];
};

export function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
