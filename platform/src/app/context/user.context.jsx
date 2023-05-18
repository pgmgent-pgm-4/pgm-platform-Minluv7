import { useContext, createContext, useState } from "react";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    const logOut = () => {
      setUser(null);
    };
  
    const logIn = () => {
      setUser({
        userName: 'Nese Yildirim',
        avatarUrl: "https://randomuser.me/api/portraits/lego/6.jpg"
      });
    };
  
    return (
      <UserContext.Provider value={{ user, logIn, logOut }} >
        {children}
      </UserContext.Provider>
    );
  };

export {
  UserContext,
  UserProvider,
  useUserContext,
}