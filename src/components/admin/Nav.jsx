import React from 'react';

function Nav({Toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparant">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <i className="navbar-brand bi bi-justify-left f-4" onClick={Toggle}>
          Hi, Admin!
        </i>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form className="ms-auto d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="background: white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
