import React from 'react';
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UsersPage from "./UsersPage";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/users">
                        <UsersPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};




export default App;