import { createContext, useState } from "react";
import { getUser } from "../services/api";

const UserContext = createContext({
  user: {},
  getUserOfApi: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const getUserOfApi = () => {
    const userApi = getUser();
    setUser(userApi);
  };

  return (
    <UserContext.Provider value={{ user, getUserOfApi }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
