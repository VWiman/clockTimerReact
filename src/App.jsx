import Clock from "./Clock";
import Timer from "./Timer";

export default function App() {
	const random = Math.floor(Math.random() * 10000 + 1);
	return (
    <article className="col">
      <h2 className="heading">Clocks</h2>
			<section className="clocks">
				<Clock city={"London"} timeZone={"Europe"} />
				<Clock city={"Helsinki"} timeZone={"Europe"} />
				<Clock city={"Stockholm"} timeZone={"Europe"} />
      </section>
      <h2 className="heading">Timers</h2>
			<section className="timers">
				<Timer countDown={"minute"} />
				<Timer countDown={"hour"} />
				<Timer countDown={"day"} />
				<Timer countDown={random} />
			</section>
		</article>
	);
}
