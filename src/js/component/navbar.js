import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { GlobalCartContext } from "../context/CartContext";

export const Navbar = () => {
  const { cart } = useContext(GlobalCartContext);
  const { removeCart } = useContext(GlobalCartContext);
  
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <span className="navbar-brand">
          <img
            className="margen1"
            src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5-500x281.png"
          />
        </span>
      </Link>
      <div className="margen2">
        <Link>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorite
                <span className="badge bg-secondary mx-2">{cart.length ? cart.length : 0}</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                {cart.length > 0 &&
                  cart.map((prod, i) => {
                    return (
                      <li>
                        <a className="dropdown-item" href="#" key={i}>
                          {prod.name}
                          <i className="far fa fa-trash mx-2" onClick={() => removeCart(prod.name)}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};
