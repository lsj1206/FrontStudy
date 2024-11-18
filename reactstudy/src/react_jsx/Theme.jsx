import React, { useContext, useState, useCallback } from "react";
import './styles.css';

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

function MainContent(props) {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className="wrapper-col" style={{
			backgroundColor: theme == "light" ? "white" : "#333333",
			color: theme == "light" ? "black" : "white",
			}}
		>
			<button onClick={toggleTheme}>테마 변경</button>
		</div>
	)
}

function ThemeChange(props) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = useCallback(() => {
		if (theme == "light") {
			setTheme("dark");
		}
		else if (theme == "dark") {
			setTheme("light");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value= {{ theme, toggleTheme }}>
			<MainContent />
		</ThemeContext.Provider>
	);
}

export default ThemeChange;
