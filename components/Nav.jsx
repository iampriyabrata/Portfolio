import React from "react";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg p-0 m-0 mb-3 bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand active fs-2 fw-bold" href="#">
          Priyabrata.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav fw-bold  container-fluid d-flex justify-content-end gx-5 ">
            <li class="nav-item" aria-current="page">
              <a class="nav-link " href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Certification
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
