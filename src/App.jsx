import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
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
				<Route path="/portfolio" element={<Home />} />
				<Route path="/portfolio/projects" element={<Projects />} />
				<Route path="/portfolio/about" element={<About />} />
				<Route path="/portfolio/contact" element={<Contact />} />
				<Route path="*" element={<Navigate to="/portfolio" />} />
			</Routes>
		</Router>

	)
}

export default App