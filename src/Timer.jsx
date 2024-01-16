import { useEffect } from "react";
import { useState } from "react";

export default function Timer({ countDown }) {
    let value = 0;
    let title = ""

	let minute = 60;
	let hour = minute * 60;
	let day = hour * 24;

	if (countDown === "minute") {
        value = minute;
        title = "One minute:"
	} else if (countDown === "hour") {
        value = hour;
        title = "One hour:";
    } else if (countDown === "day") {
        title = "One day:";
        value = day;
        
    } else {
        title = "Random:";
        value = countDown;
    };

	const [timer, setTimer] = useState(value);

	function updateTimer() {
		setTimer((timer) => (timer > 0 ? timer - 1 : 0));
	}

	useEffect(() => {
		const timerID = setInterval(updateTimer, 1000);
		return function clean() {
			clearInterval(timerID);
		};
    }, []);
    
    function formatTime() {
        let mins = Math.floor(timer / 60)
        let secs = timer % 60
        let time = `${mins} minutes ${secs} seconds`
        return time
    }

    return <div className="col"><h3>{title}</h3><p>{formatTime()}</p></div>;
}
