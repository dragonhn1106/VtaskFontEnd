import React, { Component } from "react";
import "./MainRight.css";
import TableProject from "../../Projects/TableProject/TableProject";
import TableUser from "../../Users/TableUser/TableUser";
import { withRouter } from "react-router";

class MainRight extends Component {
  render() {
    const { match } = this.props;
    const renderMainRight = () => {
      if (match.path === "/tin-nhan") {
        return <TableProject />;
      } else if (match.path === "/thanh-vien") {
        return <TableUser />;
      } else {
        return null;
      }
    };

    return <div className="MainRight">{renderMainRight()}</div>;
  }
}

export default withRouter(MainRight);
