import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../views/HomePage";
import PageNotFound from "../views/PageNotFound";
import React from "react";
import ManageCoursePage from "../views/coursesModule/ManageCoursePage";

export default class Navigation {
  views = [];

  constructor(pages) {
    this.addPagesToMenu(pages);
    return this;
  }

  addPagesToMenu(pages) {
    Array.isArray(pages) ? this.views.push(...pages) : this.views.push(pages);
    return this;
  }

  setRoutes() {
    return (
      <Switch>
        {this.views.map((view,index) => {
        	console.log(view.component, view.path);
        	return (
		        <Route key={index} path={view.path} component={view.component} />
	        );
        })}
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }

  setRedirections(args) {
    return <Redirect exact from="/about-page" to="/about" />;
  }
}
