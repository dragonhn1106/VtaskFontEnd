import React, { Component } from "react";
import "./JobInformationLeft.css";
import DoughnutChart from "../../common/DoughnutChart/DoughnutChart";
import JobStatusRow from "./JobStatusRow/JobStatusRow";
import JobProgressBar from "./JobProgressBar/JobProgressBar";
import Icon from "@mdi/react";
import { mdiCircleMedium } from "@mdi/js";

class JobInformationLeft extends Component {
  render() {
    return (
      <div className="JobInformationLeft">
        <div className="JobInformationLeft__header d-flex flex-column justify-content-center text-center">
          <h1>THÔNG TIN DỰ ÁN</h1>
        </div>
        <div className="JobInformationLeft__header2"></div>
        <div className="job_information">
          <div style={{ width: "90%", margin: "auto" }}>
            <DoughnutChart />
          </div>

          <div className="mt-4">
            <JobStatusRow color="grey" count={35} title="Công việc đang chờ" />
            <JobStatusRow
              color="orange"
              count={35}
              title="Công việc đang chờ"
            />
            <JobStatusRow color="green" count={35} title="Công việc đang chờ" />
            <JobStatusRow color="red" count={35} title="Công việc đang chờ" />
          </div>
          <div className="progess-area p-4">
            <div className="progress-title mb-3 mt-3">TIẾN ĐỘ DỰ ÁN</div>
            <JobProgressBar />
            <div>
              <Icon path={mdiCircleMedium} size={2} color="orange" />
              <span className="ml-3">Kế hoạch </span>
            </div>
            <div>
              <Icon path={mdiCircleMedium} size={2} color="#1ce41c" />
              <span className="ml-3">Hoàn thành thực tế </span>
            </div>
            <div className="progress-title mb-3 mt-3">MÔ TẢ DỰ ÁN</div>
            <p>
              Sản xuất ứng dụng mới đáp ứng nhu cầu hiện tại của thị trường.Đón
              đầu xu thế công nghệ thông tin mới.
            </p>
            <div className="progress-title mb-3 mt-3">THÀNH VIÊN</div>
            <div className="tong-so-nguoi-tham-gia d-flex justify-content-center">
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <img
                  src="/static/media/user1.a16a011e.jpg"
                  width="30%"
                  alt=""
                />
              </div>
              <div className="user-n">
                <div
                  className="m-0 user-count d-flex justify-content-center align-items-center"
                  style={{ color: "#fff" }}
                >
                  +4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobInformationLeft;
