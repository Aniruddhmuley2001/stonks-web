import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import OrgLeadboard from "views/OrgLeadboard/OrgLeadboard.js";
import TradeLeadboard from "views/TradeLeadboard/TradeLeadboard.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import UserContextProvider from "./context/UserContextprovider";
import PrivateRoute from "./routes/PrivateRoute";
var hist = createBrowserHistory();
const App = () => {
  return (
    <UserContextProvider>
      <Router history={hist}>
        <Switch>
          {/*<Route path="/landing-page" component={LandingPage} />*/}
          {/*<Route path="/profile-page" component={ProfilePage} />*/}
          <Route path="/login-page" component={LoginPage} />
          <PrivateRoute path="/leaderboard-org">
            <OrgLeadboard />
          </PrivateRoute>
          <PrivateRoute path="/leaderboard-trader">
            <TradeLeadboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
