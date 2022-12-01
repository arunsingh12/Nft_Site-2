import React from "react";
import "./NavMenu.css";

export const NavMenu = () => {
  return (
    <>
      <div className="header_navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-sm ">
            <a className="navbar-brand" href="#">
              <img src="https://enefti.modeltheme.com/wp-content/themes/enefti/images/svg/logo.svg" alt="Logo" style={{ width: "150px" }} />
            </a>

            <ul className="navbar-nav nav_list justify-content-center">
              <li className="nav-item main_list ">
                <a className="nav-link text-light" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item main_list">
                <a className="nav-link text-light" href="#">
                  Collectors
                </a>
              </li>
              <li className="nav-item main_list">
                <a className="nav-link text-light" href="#">
                  NFT Marketplace
                </a>
              </li>
              <li className="nav-item main_list">
                <a className="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item main_list">
                <a className="nav-link text-light" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item main_list">
                <a className="nav-link text-light" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item main_list">
                <a className="nav-link text-light" href="#">
                  Purchase
                </a>
              </li>
              <li className="nav-item signin_link">
                <a className="nav-link text-light " href="#">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
