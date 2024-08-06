import React from "react";
import "./style.css";
import vector from "../../Assets/vector.jpg";
function Navbar() {
  return (
    <div className="Navbardiv">
      <nav class="navbar">
        <div class="container-fluid navclass">
          <form class="d-flex" role="search">
            <input
            
              class="form-control me-2 searchBar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="IconsDiv">
            <span className="Iconspan">
              <i class="bi bi-envelope"></i>
            </span>
            <span className="Iconspan">
              <i class="bi bi-gear"></i>
            </span>
            <span className="Iconspan">
              <i class="bi bi-bell"></i>
            </span>
            <span></span>
            <span>
              <img src={vector} className="UserImg"></img>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
