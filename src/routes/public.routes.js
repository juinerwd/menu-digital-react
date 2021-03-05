import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import PublicRoute from './helperRountes';

import Start from '../views/start/Start';
import Home from '../views/home/Home';
import Order from '../views/order/Order';
import DetailProduct from '../views/product/DetailProduct';

const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path='/' component={Start} />
            <PublicRoute exact path='/home' component={Home} />
            <PublicRoute exact path='/order' component={Order} />
            <PublicRoute exact path='/detail-product/:id' component={DetailProduct} />
            <Redirect path='/**' to='/' />
        </Switch>
    )
}

export default PublicRoutes;
