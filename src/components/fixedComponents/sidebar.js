import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default class sidebar extends React.Component {
  state = { active: false };
  renderLink = () => {
    const link = this.props.lists.map((link, index) => {
      return (
        <NavLink key={index} activeClassName="on-active"  to={link.to}>
          {link.label}
        </NavLink>
      );
    });
    return link;
  };

  openList = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <>
        <button onClick={() => this.openList()} className="dropdown-btn">
          {this.props.label}
          <ArrowDropDownIcon />
        </button>
        <div
          className={`dropdown-container ${
            this.state.active ? "dropdown-open" : ""
          }`}
        >
          {this.renderLink()}
        </div>
      </>
    );
  }
}
