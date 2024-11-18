import React, { useState } from "react";
import "./styles.css"

function ConfirmButton(props) {
	const [isConfirmed, setIsConfirmed] = useState(false);

	const handleConfirm = () => {
		setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
	};

	return (
		<div className="wrapper">
			<button onClick={handleConfirm} disabled={isConfirmed}>
				{isConfirmed ? "확인됨" : "확인하기" }
			</button>
		</div>
	);
}

export default ConfirmButton;
