import '../App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./Navigation";
import Products from "./Products";
import Home from "./Home";
import 'antd/dist/antd.css';

import {Layout} from 'antd';
import ProductDetail from "./ProductDetail";
import OrdersActive from "./OrdersActive";
import Users from "./Users";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import RidersList from "./RidersList";
import AdminsList from "./AdminsList";
import OrderDetails from "./OrderDetails";


const App = () => {
    return (
        <Layout className="App">
            <BrowserRouter>
                <Navigation/>

                <Switch>
                    <Route path="/login/" component={Login}/>
                    <PrivateRoute path="/products/:id/" component={ProductDetail}/>
                    <PrivateRoute path="/products/" component={Products}/>
                    <PrivateRoute path="/users/" component={Users}/>
                    <PrivateRoute path="/admins/" component={AdminsList}/>
                    <PrivateRoute path="/riders/" component={RidersList}/>
                    <PrivateRoute path="/orders/active/" component={OrdersActive}/>
                    <PrivateRoute path="/orders/:id/" component={OrderDetails}/>
                    <PrivateRoute path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Layout>
    );
};

export default App;