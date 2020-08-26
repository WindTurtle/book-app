import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";

export default function Header(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <NavLink className="logo-link" to="/home">
            <span className="logo-span">Eng</span>-42day
          </NavLink>
        </div>
        <div className="spacer">
        </div>
        <div className="toolbar_navigation-items">
          <ul className="toolbar_navigation-list">
            <li className="item-list">
              <NavLink className="item-link" to="/">
                Books
              </NavLink>
            </li>
            <li className="item-list">
              <NavLink className="item-link" to="/">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
