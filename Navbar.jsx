import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand text-white fs-4 fw-bold" href="#">
          Food Corner
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Home Link */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            {/* Menu Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/cart">Add to Cart</Link></li>
              </ul>
            </li>

            {/* Orders Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Orders
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/orders/current">Current Orders</Link></li>
                <li><Link className="dropdown-item" to="/orders/past">Past Orders</Link></li>
                <li><Link className="dropdown-item" to="/orders/favorites">Favorites</Link></li>
              </ul>
            </li>

            {/* Cart Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cart
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/cart">View Cart</Link></li>
                <li><Link className="dropdown-item" to="/cart/checkout">Checkout</Link></li>
              </ul>
            </li>

          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search food..."
              aria-label="Search"
              style={{ width: "180px" }}
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>

          {/* Login & SignUp Buttons */}
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary" style={{ marginLeft: "15px", width: "90px", height: "40px", fontSize: "18px" }}>SignUp</button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
