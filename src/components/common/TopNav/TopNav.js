import React, { Component } from "react";
import "./TopNav.css";
import Icon from "@mdi/react";
import depIc from "../../../assets/dep-ic.png";
import {
  mdiChevronDown,
  mdiMessageTextOutline,
  mdiBellOutline
} from "@mdi/js";
import SearchIcon from "../../../assets/search-ic.jpg";

class TopNav extends Component {
  render() {
    return <div className="TopNav">
      <div className="pull-left pl-2 pt-2 TopNav--Items d-flex">
        <div className="search ml-4 pt-1">
          <input
            name="search-job"
            type="text"
            className="form-control"
            placeholder="Tìm nhanh người dùng"
            style={{ backgroundImage: `url(${SearchIcon})` }}
          />
        </div>
      </div>
    </div>;
  }
}

export default TopNav;
