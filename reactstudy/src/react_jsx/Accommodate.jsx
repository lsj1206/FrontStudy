import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
import './styles.css';

const MAX_CAPACITY = 10;

function Accommodate(props) {
	const [isFull, setIsFull] = useState(false);
	const [count, increaseCount, decreaseCount] = useCounter(0);

	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
	}, [count]);

	return (
		<div className="wrapper-col">
			<div>
				<button onClick={increaseCount} disabled={isFull}>입장</button>
				<button onClick={decreaseCount} >퇴장</button>
			</div>
			<p style={{ margin: 1 }}>{`총 ${count}명 수용했습니다.`}</p>
			{isFull && <p style={{ margin: 1, color: "red" }}>정원이 가득찼습니다.</p>}
		</div>
	)
}

export default Accommodate;
