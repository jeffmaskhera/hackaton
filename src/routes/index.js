import React from 'react'
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Favorites from "../pages/favorites/favorites";
import Header from "../components/header/header";
import {RoutesEnum} from "./routes.enum";
import StudentPage from "../pages/student/student-page";
import { Link } from "react-router-dom";

const Routes =()=> {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={RoutesEnum.Home} component={Home} />
                <Route exact path={RoutesEnum.Student} component={StudentPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes