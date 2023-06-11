/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { settings } from '../config/settings';
import { ROUTES } from '../routes';

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem(settings.AUTH_KEY_LOCALSTORAGE)));

  useEffect(() => {
    localStorage.setItem(settings.AUTH_KEY_LOCALSTORAGE, JSON.stringify(currentUser));
  }, [currentUser]);

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      console.log(email, password);
      const response = await fetch('/api/login', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email,
          password,
        }),
      });

      const user = await response.json();
      console.log(user);

      if (user) {
        setCurrentUser(user);
      }

      // Navigate to user dashboard page
      navigate(ROUTES.USER);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      setCurrentUser(null);
      const response = await fetch('/api/logout', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser),
      });

      const userLoggedOut = await response.json();
      console.log('userLoggedOut');

      // Navigate to sign in page
      navigate(ROUTES.AUTH_SIGN_IN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, signInWithEmailAndPassword, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider, useAuth };
