import React from "react";
import { Link } from "react-router-dom";
import './styles/HeaderShared.css'
import useAuth from "../../hooks/useAuth";
import 'boxicons';

const HeaderShared = () => {
  const { isAuthenticated, logoutUser } = useAuth();

  return (
    <header className="menu__top">
      <h1><Link className="menu__title" to='/'>Hotels App</Link></h1>
      <nav>
        <ul className="menu__nav">
          {isAuthenticated && (
            <li><Link className="menu__li" to='/reservations'>Reservations</Link></li>
          )}
          {!isAuthenticated && (
            <>
              <li><Link className="menu__li" to='/register'>Register</Link></li>
              <li><Link className="menu__li" to='/login'>Login</Link></li>
            </>
          )}
          {isAuthenticated && (
            <li onClick={logoutUser}><i className='bx bx-log-out'></i></li>

          )}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderShared;
