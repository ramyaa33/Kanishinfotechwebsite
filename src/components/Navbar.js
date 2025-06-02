import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // null, 'about', or 'category'
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const handleDropdownToggle = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
   <header className={`header d-flex align-items-center sticky-top bg-dark py-2 ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
  <div className="container d-flex align-items-center justify-content-between">
    <a href="/" className="logo d-flex align-items-center text-white text-decoration-none">
      <img
        src="img/Logo_Kanish_01.ico"  // Replace with your logo path
        alt="Logo"
        style={{ height: '35px' }} // Adjust as needed
      />
      <h1 className="sitename m-0">KANISH INFOTECH</h1>
      <span className="text-warning">.</span>
    </a>
 



        {/* Mobile Menu Toggle Button */}
        <div className="mobile-nav-toggle d-lg-none" onMouseEnter={toggleMobileNav}>
          <i className={mobileNavActive ? 'bi bi-x' : 'bi bi-list'}></i>
        </div>

        {/* Navigation Menu */}
        <nav className={`navmenu ${mobileNavActive ? 'd-block' : 'd-none d-lg-block'}`}>
          <ul className="nav flex-column flex-lg-row">

            <li className="nav-item">
              <a className="nav-link text-white" href="/firstpg">Home</a>
            </li>

            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-white bg-transparent border-0"
                onMouseEnter={() => handleDropdownToggle('about')}
                id="aboutDropdown"
                aria-expanded={dropdownOpen === 'about'}
                aria-haspopup="true"
              >
                About 
              </button>
              {dropdownOpen === 'about' && (
                <ul className="dropdown-menu show bg-dark border-0" aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item text-white bg-dark" href="/aboutus">About Us</a></li>
                  <li><a className="dropdown-item text-white bg-dark" href="/ourteampg">Our Team</a></li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/Security">Security Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="header-social-links d-none d-lg-flex">
          <button type="button" className="btn btn-link text-white me-2 p-0" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </button>
          <button type="button" className="btn btn-link text-white me-2 p-0" aria-label="Email">
            <i className="bi bi-envelope-fill"></i>
          </button>
          <button type="button" className="btn btn-link text-white me-2 p-0" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </button>
          <button type="button" className="btn btn-link text-white p-0" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
