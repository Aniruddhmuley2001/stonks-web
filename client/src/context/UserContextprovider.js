import { UserContext } from "./UserContext";
import React, { useState, useEffect } from "react";
import { getAuthKey, removeAuthKey, verifyAuthKey } from "../utils/helper";
const UserContextProvider = ({ children }) => {
  const auth = useAuth();
  console.log(auth);
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
const checkAuthKey = async () => {
  const isLoggedIn = await verifyAuthKey().then(({ data }) => !!data);
  return isLoggedIn;
};
const useAuth = () => {
  const [status, setStatus] = useState(localStorage.getItem("AUTH_KEY"));
  useEffect(() => {
    checkAuthKey().then((isLoggedIn) => setStatus(isLoggedIn));
  }, [status]);
  const signIn = () => {
    const AuthToken = getAuthKey();
    if (AuthToken) {
      setStatus(true);
    }
  };
  const signOut = () => {
    removeAuthKey();
    setStatus(false);
  };
  return {
    status,
    signIn,
    signOut,
  };
};
