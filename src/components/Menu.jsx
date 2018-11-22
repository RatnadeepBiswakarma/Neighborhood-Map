// this file is no longer used in this project


import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  parentState = this.props.parentState;
  state = {
    dataLoaded: false
  };
  render() {
    return (
      <nav id="navbar">
        <form>
          <input type="text" autoFocus={true} id="query" placeholder="Search" />
        </form>
        <ul />
      </nav>
    );
  }
}

export default Menu;
