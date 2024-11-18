import React, { useState } from "react";
import "./styles.css"

const scaleNames = {
	c: "섭씨",
	f: "화씨",
};

function TemperatureInput(props) {
	const handleChange = (event) => { props.onTemperatureChange(event.target.value); };

	return (
		<fieldset>
			<legend>
				온도를 입력해주세요: (단위:{scaleNames[props.scale]})
			</legend>
			<input value={props.temperature} onChange={handleChange} />
		</fieldset>
	);
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return ( <p style={{ margin: 2, color: "red" }}>물이 끓습니다.</p> );
	}
	return ( <p style={{ margin: 2 }}>물이 끓지 않습니다.</p> );
}

function toCelsius(fahrenheit) { return ((fahrenheit - 32) * 5) / 9; }

function toFahrenheit(celsius) { return ((celsius * 9) / 5) + 32; }

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) { return ""; }

	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function Temperature(props) {
	const [temperature, setTemperature] = useState("");
	const [scale, setScale] = useState("c");

	const handleCelsiusChange = (temperature) => {
		setTemperature(temperature);
		setScale("c");
	};

	const handleFahrenheitChange = (temperature) => {
		setTemperature(temperature);
		setScale("f");
	};

	const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<div className="wrapper-col">
			<TemperatureInput
				scale="c"
				temperature={celsius}
				onTemperatureChange={handleCelsiusChange}
			/>
			<TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={handleFahrenheitChange}
			/>
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
}

export default Temperature;
