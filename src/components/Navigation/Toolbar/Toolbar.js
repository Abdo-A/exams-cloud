import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

import { pages } from "../../../data/pagesData";

import "./Toolbar.css";

class Toolbar extends Component {
  render() {
    const pathname = window.location.pathname;

    return (
      <Menu inverted className="Menu">
        {pages.map(page => (
          <NavLink to={page.path} key={page.name} style={{ flex: 1 }}>
            <Menu.Item
              style={{ flexFlow: "column" }}
              name={page.name}
              as="span"
              active={pathname === page.path}
            />
          </NavLink>
        ))}
      </Menu>
    );
  }
}

export default Toolbar;
