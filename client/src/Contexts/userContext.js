import React, { useState, useEffect, createContext } from "react";

const UserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
});
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
