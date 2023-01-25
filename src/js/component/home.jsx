import React, { useEffect, useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red"); // Setting up useState to change the color
	
	useEffect(() => {
		const timer = setTimeout(() => {				// Changing the light every 3 seconds
			if (selectedColor === "red") {
				setSelectedColor("yellow")
			} else if (selectedColor === "yellow") {
				setSelectedColor("green")
			} else if (selectedColor === "green") {
				setSelectedColor("red")
			}
		}, 3000);
		return () => clearTimeout(timer);			// This line makes sure that we won't have an issue with light running randomply when clicking on another one. The "return" cleans up the effect when it unmounts.
	});	
		
	return (										// Here we are utilizing the function where we can click on each individual light
		<>
		<div className="traffic-holder"></div>		
		<div className="traffic-light">
		<div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
		<div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
		<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
		</>
	);
};

export default Home;
