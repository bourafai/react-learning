import React from "react";
import Header from "./components/common/Header";
import Navigation from "./api/Navigation";
import "font-awesome/css/font-awesome.min.css";
//load views
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import CoursesPage from "./views/coursesModule/CoursesPage";

const App = () => {
	const navigationPages = [
		{path: "/about", component: AboutPage, name: "About"},
		{path: "/contact", component: ContactPage, name: "Contact"},
		{path: "/courses", component: CoursesPage, name: "Courses"},
	];
	const nav = new Navigation(navigationPages);
	return (
		<div>
			<Header navigation={navigationPages}/>
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
