import React, { Component } from "react";
import "./JobProgressBar.css";

class JobProgressBar extends Component {
  render() {
    return (
      <div className="JobProgressBar">
        <div className="JobProgressBar-top">
          <div className="d-flex justify-content-between">
            <div>
              <div>08:30</div>
              <div>10/06/2019</div>
            </div>
            <div className="text-right">
              <div>08:30</div>
              <div>10/06/2019</div>
            </div>
          </div>
          <div className="real" style={{ "--progressbar-percent": "50%" }}>
            42%
          </div>
        </div>

        <div
          className="progress-line mr-1"
          style={{ "--progressbar-percent": `50%`, "--now-percent": `70%` }}
        ></div>
        <div className="now" style={{ "--now-percent": `70%` }}>
          <div>Hôm nay </div>
          <div className="text-danger">55%</div>
        </div>
      </div>
    );
  }
}

export default JobProgressBar;
