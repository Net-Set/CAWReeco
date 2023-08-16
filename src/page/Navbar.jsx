import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Banner from './Banner';

const CustomNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1e633f', color: 'white' }}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{ color: 'white' }} href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" style={{ color: 'white' }} href="#">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" style={{ color: 'white' }} aria-disabled="true">
                Analysis
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginTop: '13px' }} />      </li>
              <li className="nav-item">
                <a className="nav-link disabled" style={{ color: 'white' }} aria-disabled="true">
                  Hello,James
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      
    </nav>
    <Banner/>
    </>
  );
}

export default CustomNavbar;
