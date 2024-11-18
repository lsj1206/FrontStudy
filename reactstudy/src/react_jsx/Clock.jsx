import React, { useState, useEffect } from 'react';
import './styles.css';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 주기적으로 시간을 업데이트하는 useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // 1초마다 업데이트

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="wrapper">
      <h2 style={{ margin: 2 }}>Time: {time}</h2>
    </div>
  );
}

export default Clock;
