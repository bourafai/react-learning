import React from "react";
import AboutPage from "./views/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./views/coursesModule/CoursesPage";
import Navigation from "./api/Navigation";

const App = () => {
	const defaultPages = [
		{path: "/about", component: "AboutPage"},
		{path: '/contact', component: 'ContactPage'},
		{path: "/courses", component: "CoursesPage"},
		{path: '/', component: 'HomePage'},
	];
	const nav = new Navigation(defaultPages);
	return (
		<div>
			<Header/>
			<div className="page-container">
				{/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
				{nav.setRoutes()}
				{/*{nav.setRedirections()}*/}
			</div>
		</div>
	);
};

export default App;