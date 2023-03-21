import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <span className="navbar-brand">
        <img className="margen1" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5-500x281.png"/>
        </span>
      </Link>
      <div className="margen2">
        <Link to="/demo">
          <button type="button" className="btn btn-primary">
            Favorite <span className="badge bg-secondary">4</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};
