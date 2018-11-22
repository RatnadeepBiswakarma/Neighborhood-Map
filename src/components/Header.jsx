import React, { Component } from "react";
import menu from "./../img/menu_icon.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; //
class Header extends Component {
  state = {};
  render() {
    return (
      <div id="menu_bar">
        <a href="./#">
          <FontAwesomeIcon
            style={{
              color: "#ffffdf",
              width: "30px",
              height: "30px",
              margin: "auto",
              fontWeight: "normal",
              padding: "5px"
            }}
            icon={faBars}
            onClick={() => {
              let nav = document.getElementById("navbar");
              nav.classList.toggle("toggle");
            }}
            id="menu_icon"
            src={menu}
            alt="menu icon"
          />
        </a>
        <h1 tabIndex='0'>Neighborhood Map</h1>
      </div>
    );
  }
}

export default Header;
