import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUserDetails = Cookies.get("userDetails");
    const storedToken = Cookies.get("token");

    if (storedUserDetails && storedToken) {
      setUserDetails(JSON.parse(storedUserDetails));
      setToken(storedToken);
    }
  }, []);

  const signIn = (res) => {
    setUserDetails(res.userDetails);
    setToken(res.token);
    Cookies.set("userDetails", JSON.stringify(res.userDetails));
    Cookies.set("token", res.token);
    console.log(res);
  };

  const signOut = () => {
    setUserDetails(null);
    setToken(null);

    Cookies.remove("userDetails");
    Cookies.remove("token");
  };

  const isLogin = () => {
    if (Cookies.get("token")) return true;
    return false;
  };

  return (
    <UserContext.Provider
      value={{ userDetails, token, signIn, signOut, setUserDetails, isLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
