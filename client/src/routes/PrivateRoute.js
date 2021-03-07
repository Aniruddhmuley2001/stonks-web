import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext, LOGGED_IN, LOGGED_OUT } from "../context/UserContext";

const PrivateRoute = ({ children, ...props }) => {
  const { status } = useUserContext();
  console.log(status);
  return (
    <Route {...props}>
      {status ? children : <Redirect to="/login-page" />}
    </Route>
  );
};

export default PrivateRoute;
