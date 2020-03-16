import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./JobMainLeft.css";
import { withRouter } from "react-router";
import JobInformationLeft from "../../Jobs/JobInformationLeft/JobInformationLeft";
import JobGroupLeft from "../JobGroupLeft/JobGroupLeft";
import MembersGroupJob from "../MembersGroupJob/MembersGroupJob";
class JobMainLeft extends Component {

  render() {
    return (
      <div>
        <Route  
          path={`${this.props.match.path}/`}
          exact
          component={JobInformationLeft}
        />
        <Route
          path={`${this.props.match.path}/nhom-viec`}
          component={JobGroupLeft}
        />
        <Route
          path={`${this.props.match.path}/thanh-vien`}
          component={MembersGroupJob}
        />
      </div>
    );
  }
}

export default withRouter(JobMainLeft);
