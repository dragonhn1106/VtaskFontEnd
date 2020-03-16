import React, { Component } from "react";
import MainLeft from "./../../components/common/MainLeft/MainLeft";
import MainRight from "./../../components/common/MainRight/MainRight";

class UserPage extends Component {
  componentDidMount() {
    document.title = "Thành viên";
  }
  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <div className="row p-0 m-0">
          <div className="col-sm-3 p-0">
            <MainLeft />
          </div>
          <div className="col-sm-9 p-0">
            <MainRight content="users"/>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
