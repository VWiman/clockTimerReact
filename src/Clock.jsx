import { useEffect } from "react";
import { useState } from "react";

export default function Clock(props) {
	const date = new Date();

	const [currentTime, setCurrentTime] = useState(date);

	function updateTime() {
		setCurrentTime(new Date());
	}

	useEffect(() => {
		const timeID = setInterval(updateTime, 1000);
		return function clean() {
			clearInterval(timeID);
		};
	}, []);

	return (
		<section className="row">
			<h2>{props.city}:</h2>
            <h4>{currentTime.toLocaleTimeString("en-GB", { timeZone: `${props.timeZone}/${props.city}` })}</h4>
		</section>
	);
}
