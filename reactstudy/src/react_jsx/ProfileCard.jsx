import React from "react";
import './styles.css';

function Card(props) {
	const { title, backgroundcolor, children } = props;

	return (
		<div
			style={{
				margin: 8,
				padding: 8,
				borderRadius: 8,
				boxShadow: "0px 0px 4px grey",
				backgroundColor: backgroundcolor || "white",
			}}
		>
			{title && <h1>{title}</h1>}
			{children}
		</div>
	)
}

function ProfileCard(props) {
	return (
		<Card title="React" backgroundcolor="#43a04e">
			<p>안녕하세요.</p>
			<p>반갑습니다.</p>
		</Card>
	)
}

export default ProfileCard;
