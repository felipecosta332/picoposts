import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.svg";
import { useState } from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="PicoPosts Logo" />
        <span>PicoPosts</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
