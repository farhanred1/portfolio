import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Resume from "./pages/Contact"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";

function App() {

	return (

		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Resume />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>

	)
}

export default App