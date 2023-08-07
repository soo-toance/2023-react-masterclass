import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
interface IRouterProps {
}

function Router({} : IRouterProps) {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        </Switch>
    </BrowserRouter>
    );
}

export default Router;