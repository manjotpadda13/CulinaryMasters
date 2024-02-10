
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
      <nav className="profile-header"> 
        <a href="home">   
          <img
            src="https://cmsrl.com/wp-content/uploads/2018/06/ICONA-CM.png" className="logo-pic"
            alt="Logo"
          />
            </a>  
          <h1 className="header">Culinary Masters</h1>
          <div>
            <a href="/signup" >
              Sign up
            </a>
            <a href="/login">
              Login
            </a>
            <a
              href="/logout"
            
              onClick={handleLogout}>
              Logout
            </a>
          </div>

          
          

      </nav>
    </>
  );
}

export default Header;
