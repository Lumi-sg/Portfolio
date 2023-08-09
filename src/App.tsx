import "./App.css";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./reset.css";

function App() {
	return (
		<div className="AppContainer">
			<Header />
			<Body />
			<Contact />
		</div>
	);
}

export default App;
