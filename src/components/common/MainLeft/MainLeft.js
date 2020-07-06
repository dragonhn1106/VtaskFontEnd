import React, { Component } from "react";
import "./MainLeft.css";
import ListProjectGroup from "../../Departments/ListProjectGroup/ListProjectGroup";
import { withRouter } from "react-router";

class MainLeft extends Component {
  render() {
    const { match } = this.props;
    const renderMainLeft = () => {
      if (match.path === "/tin-nhan") {
        return <ListProjectGroup />;
      } 
      else {
        return null;
      }
    };
    return <div className="MainLeft">{renderMainLeft()}</div>;
  }
}

export default withRouter(MainLeft);
