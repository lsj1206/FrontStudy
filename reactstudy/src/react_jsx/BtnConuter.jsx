import React, { useState, useEffect } from "react";
import './styles.css';

function BtnCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => { document.title = `You Clicked ${count} times`; });

  return (
    <div className="wrapper-col">
      <button style={{ margin: 4 }} onClick={() => setCount(count + 1)}>Click</button>
      <p style={{ margin: 4 }}>총 {count}번 클릭했습니다.</p>
    </div>
  );
}

export default BtnCounter;
