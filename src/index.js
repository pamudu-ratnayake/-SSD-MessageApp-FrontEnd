/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Index from "./views/Index"
import Login from "./views/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
        domain="dev-5gmvtbtnstnt351a.us.auth0.com"
        clientId="lUJpvZRWsNBKrQYjgN7z6PvoaCMl8wL1"
        redirectUri={window.location.origin}>
      <Index/>
    </Auth0Provider>
    // <BrowserRouter>
    //     <Switch>
    //         <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
    //         <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
    //         {/*<Route path="/auth0" render={(props) => <Auth0Provider domain="dev-5gmvtbtnstnt351a.us.auth0.com" clientId="lUJpvZRWsNBKrQYjgN7z6PvoaCMl8wL1" redirectUri={window.location.origin} {...props}/> }/>*/}
    //         <Redirect from="/" to="/auth/auth0" />
    //     </Switch>
    // </BrowserRouter>
);
