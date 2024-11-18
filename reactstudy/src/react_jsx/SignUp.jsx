import React, { useState } from "react";
import './styles.css';

function SingUp(props) {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("남성");

	const handleChangeName = (event) => {
		setName(event.target.value);
	};

	const handleChangeGender = (event) => {
		setGender(event.target.value);
	};


	const handleSubmit = (event) => {
		alert(`이름: ${name}\n성별: ${gender}`);
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className="wrapper-col">
			<label> 이름:&nbsp;&nbsp;
				<input type="text" value={name} onChange={handleChangeName} />
			</label>
			<label> 성별:&nbsp;&nbsp;
				<select value={gender} onChange={handleChangeGender}>
					<option value="남성">남성</option>
					<option value="여성">여성</option>
				</select>
			</label>
			<hr className="custom-line" />
			<button type="submit">제출</button>
		</form>
	);
}

export default SingUp;
