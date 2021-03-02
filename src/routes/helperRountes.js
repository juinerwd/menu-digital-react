import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({component, ...opction}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...opction} component={component} />;
    return <Redirect to='/' />
}

export default PublicRoute;
