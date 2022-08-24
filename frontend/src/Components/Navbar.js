import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="brand">
        <Link to="/">
          <h3>
            <i className="fa fa-user mx-2" aria-hidden="true"></i>
          </h3>
        </Link>
      </div>
      <div className="logout">
        <div>
          <Link to="/add-new">Add New</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
