import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import {
	Navigate,
	RouterProvider,
	createBrowserRouter
} from "react-router-dom";

function App() {
	const router = createBrowserRouter([

		{
			path: "/portfolio/",
			element: <Home />,
		},
		{
			path: "/portfolio/projects/",
			element: <Projects />,
		},
		{
			path: "/portfolio/about/",
			element: <About />,
		},
		{
			path: "/portfolio/contact/",
			element: <Contact />,
		},
		{
			path: "*",
			element: <Navigate to="/portfolio" />,
		},

	]);
	
	return (
		<RouterProvider router={router} />
	)
}

export default App