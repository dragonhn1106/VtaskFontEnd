import React, { Component } from "react";
import "./LeftCol.css";
import logo from "../../../assets/vtask-logo-app.png";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import {
  mdiFolderMultipleOutline,
  mdiViewDashboard,
  mdiApps,
  mdiBallotOutline,
  mdiEqualizer,
  mdiAccountGroup,
  mdiDotsHorizontal
} from "@mdi/js";

class LeftCol extends Component {
  render() {
    return (
      <div className="LeftCol">
        <Link to="/" className="brand d-block text-center">
          <img
            src={logo}
            alt="vtask-logo-menu"
            max-width="90%"
            max-height="90%"
          />
        </Link>

        <div className="d-flex flex-column justify-content-between left-icon">
          <div className="LeftColItem d-block text-center">
            <div className="Items">
              <Link to="/tin-nhan" className="LeftNavLink">
                <Icon path={mdiApps} size={1.5} color={"#fff"} />
                <div className="Item">Tin Nhắn</div>
              </Link>
            </div>
            <div className="Items">
              <Link to="/thanh-vien" className="LeftNavLink">
                <Icon path={mdiAccountGroup} size={1.5} color={"#fff"} />
                <div className="Item">Thành viên</div>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Icon path={mdiDotsHorizontal} size={1.5} color="#fff"/>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftCol;
