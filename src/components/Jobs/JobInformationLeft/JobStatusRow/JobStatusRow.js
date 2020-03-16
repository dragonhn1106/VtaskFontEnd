import React, { Component } from "react";
import "./JobStatusRow.css";

class JobStatusRow extends Component {
  render() {
    return (
      <div className="JobStatusRow">
        <div className="row mt-4">
          <div className="col-2 d-flex flex-row-reverse">
            <div
              className={`ItemBarStatus ItemBarStatus--${this.props.color}`}
            ></div>
          </div>
          <div className="col-8">{this.props.title}</div>
          <div className="col-2 text-orange">{this.props.count}</div>
        </div>
      </div>
    );
  }
}

export default JobStatusRow;
