// useAuth.js
import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const createNewUser = (data) => {
    const url = 'https://hotels-app-backend.onrender.com/users';
    axios.post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const loginUser = (data) => {
    const url = 'https://hotels-app-backend.onrender.com/users/login';
    axios.post(url, data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setIsAuthenticated(true);
        window.location.reload(); // Recarga la página después de iniciar sesión
      })
      .catch((err) => console.log(err));
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, createNewUser, loginUser, logoutUser };
};

export default useAuth;
