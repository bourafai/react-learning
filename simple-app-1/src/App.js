import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UsersPage from "./views/UsersPage";
import AboutPage from "./views/AboutPage";
import HomePage from "./views/HomePage";
import Header from "./common/Header";
import CoursesPage from "./views/coursesModule/CoursesPage";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <div className="page-container">
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <AboutPage/>
                        </Route>
                        <Route path="/users">
                            <UsersPage/>
                        </Route>
                        <Route path="/courses">
                            <CoursesPage/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};




export default App;