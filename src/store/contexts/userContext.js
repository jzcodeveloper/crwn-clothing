import React, { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setCurrentUser: () => {},
  resetCurrentUser: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setCurrentUser = user => setUser(user);
  const resetCurrentUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setCurrentUser, resetCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
