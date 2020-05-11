import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../views/HomePage";
import PageNotFound from "../views/PageNotFound";
import React from "react";
import ManageCoursePage from "../views/coursesModule/ManageCoursePage";

export default class Navigation {
	routes = [];

	constructor(pages) {
		this.addPagesToMenu(pages);
		return this;
	}

	addPagesToMenu(pages) {
		Array.isArray(pages) ? this.routes.push(...pages) : this.routes.push(pages);
		return this;
	}

	setRoutes() {
		return (
			<Switch>
				{this.routes.map(({path, component: C, _props}, index) => {
					return (
						// <Route key={index} path={path} component={component}/>
						<Route key={index} path={path} render={(props) => <C {...props} {..._props} />}/>
					);
				})}
				<Route path="/course/:slug" component={ManageCoursePage}/>
				<Route exact path="/" component={HomePage}/>
				<Route component={PageNotFound}/>
			</Switch>
		);
	}

	setRedirections(args) {
		return <Redirect exact from="/about-page" to="/about"/>;
	}
}
