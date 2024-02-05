import React from "react";
import "./header.css";
import { useUser } from "../UserContext";

function Header() {
  const { user, setUser } = useUser();

  const handleLogout = async (e) => {
    e.preventDefault();

    console.log("1. Will logout");
    try {
      fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((response) => {
          console.log("Logout successful");
          if (response.ok) {
            window.location.href = "http://localhost:5173/login";
          } else {
            throw new Error("Logout failed");
          }
        })
        .catch((error) => {
          console.error("Error during logout:", error);
        });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className="profile-header">
        <div className="logo-pic">
          <img
            src="https://cmsrl.com/wp-content/uploads/2018/06/ICONA-CM.png"
            alt="Logo"
            style={{ width: "10%" }}
          />
          <h1 className="header">Culinary Masters</h1>
        </div>
        <div className="right-buttons">
          <a href="/signup" className="button-link">
            <button>Sign Up</button>
          </a>
          <a href="/login" className="button-link">
            <button>Login</button>
          </a>
          <a
            href="/logout"
            className="button-link logout-btn"
            onClick={handleLogout}
          >
            <button>Logout</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
