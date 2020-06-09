import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import PropTypes from "prop-types";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/key-logo.png";
import Logout from "./Logout";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-menu">
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <AppNavbarBrand
            full={{ src: logo, width: 55, height: 55, alt: "CoreUI Logo" }}
          />
          <AppSidebarToggler className="d-md-down-none" display="lg" />
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Logout />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
