import {Redirect, Route, Switch} from "react-router-dom";
import AboutPage from "../views/AboutPage";
import ContactPage from "../views/ContactPage";
import CoursesPage from "../views/coursesModule/CoursesPage";
import HomePage from "../views/HomePage";
import PageNotFound from "../views/PageNotFound";
import React from "react";
import UsersPage from "../views/UsersPage";
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
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/users" component={UsersPage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route exact path="/" component={HomePage}/>
                <Route component={PageNotFound}/>
            </Switch>
        );
    }

    setRedirections(args) {
        return (
            <Redirect from="about-page" to="about"/>
        );
    }
}


