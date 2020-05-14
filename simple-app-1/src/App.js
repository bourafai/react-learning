import React, {useState} from "react";
import Header from "./components/common/Header";
import Navigation from "./api/Navigation";
//load views
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import CoursesPage from "./views/coursesModule/CoursesPage";
import ManageCourse from "./views/coursesModule/ManageCoursePage";
import CartPage from "./views/CartPage";

const App = () => {

	//defining states
	const [shoppingState, setShoppingState] = useState({
		itemsInCart: [4,2],
		firstPurchase: true
	});


	const navigationPages = [
		{path: "/about", component: AboutPage, name: "About"},
		{path: "/contact", component: ContactPage, name: "Contact"},
		{path: "/courses", component: CoursesPage, name: "Courses"},
		{path: "/courses", component: CoursesPage, name: "Courses"},
	];
	const routes = [
		...navigationPages,
		{path: "/cart", component: CartPage, name: "Cart", _props: shoppingState},
		{path: "/course/:id", component: ManageCourse, name: "Manage courses", _props: shoppingState},
	];
	const nav = new Navigation(routes);
	return (
		<div>
			<Header shoppingState={shoppingState} navigation={navigationPages}/>
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
