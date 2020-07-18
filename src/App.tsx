import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { SignUp } from "./components/signUp/SignUp";
import { SignIn } from "./components/signIn/SignIn";
import {Home} from "./components/Home/Home";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

