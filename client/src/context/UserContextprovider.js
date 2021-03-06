import { UserContext } from "./UserContext";
import React, { useState } from "react";
import { getAuthKey, removeAuthKey } from "../utils/helper";
const UserContextProvider = ({ children }) => {
  const auth = useAuth();
  console.log(auth);
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

const useAuth = () => {
  const [status, setStatus] = useState(
    () => !!localStorage.getItem("AUTH_KEY")
  );
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
