import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiSwapVertical,
  mdiAccountOutline,
  mdiSettingsOutline
} from "@mdi/js";
import { List, arrayMove } from "react-movable";
import userAva from "../../../assets/user1.jpg";
import "./TableProject.css";
import depIc from "../../../assets/dep-ic.png";
import TextareaAutosize from 'react-textarea-autosize';
import {
  mdiStar,
  mdiMagnify,
  mdiFilterOutline,
  mdiDownload,
  mdiTimetable,
  mdiFullscreen,
  mdiDragVertical,
  mdiPlus,
  mdiDotsVertical,
  mdiClose 
} from "@mdi/js";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import { Dropdown } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const tableStyles = {
  background: "#eaebec",
  borderSpacing: 0
};

const thStyles = {
  borderBottom: "2px solid #ddd",
  padding: "5px 10px",
  background: "#ededed",
  color: "#666",
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
};

const tdStyles = width => ({
  borderBottom: "1px solid #ddd",
  color: "#666",
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  padding: "5px 10px",
  width
});

const buttonStyles = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  cursor: "pointer",
  background: "transparent",
  
};

class TableProject extends Component {
  state = {
    showDeleteBoxModal: false,
    onChangeText: "",
    items: [
      {
        id: 1,
        avatar: userAva,
        projectName: "Phân tích ứng dụng đặt tua lịch tự động",
        status: "Quá hạn",
        statusColor: "text-danger",
        statusDays: "4",
        percent: 50,
        daysToComplete: 250,
        rateOfProgress: "02/10/2018-16/08/2019",
        priority: "Thấp",
        priorityStatus: "badge-info",
        isHover: false
      },
      {
        id: 2,
        avatar: userAva,
        projectName: "Phân tích ứng dụng đặt tua lịch tự động",
        status: "Quá hạn",
        statusColor: "text-danger",
        statusDays: "4",
        percent: 70,
        daysToComplete: 150,
        rateOfProgress: "02/10/2018-16/08/2019",
        priority: "Cao",
        priorityStatus: "badge-danger",
        isHover: false
      },
      {
        id: 3,
        avatar: userAva,
        projectName: "Phân tích ứng dụng đặt tua lịch tự động",
        status: "Quá hạn",
        statusColor: "text-danger",
        statusDays: "4",
        percent: 70,
        daysToComplete: 150,
        rateOfProgress: "02/10/2018-16/08/2019",
        priority: "Trung bình",
        priorityStatus: "badge-warning",
        isHover: false
      }
    ]
  };

  showProjectModal = () => {
    this.setState({ showProject: true });
  };
  closeProjectModal = () => {
    this.setState({ showProject: false });
  };

 showDeleteBoxModal = ()=>{
   
 }
 onChangeText= text =>{
  this.setState({text: text})
 }

  render() {
    return (
      <div className="TableProject">
        <div className="MainRight__action d-sm-flex justify-content-between align-items-center">
          <div className="ml-3 mb-2">
            <Icon path={mdiStar} size={1} color="#31b586" />
            <strong className="ml-2 text-green">Tất cả </strong>
          </div>

          <div className="d-sm-flex align-items-center">
            <ul className="nav">
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiMagnify} size={1} />
                  </div>

                  <div className="mt-1">TÌM KIẾM</div>
                </a>
              </li>
             
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiClose} size={1} color={"red"} />
                  </div>

                  <div className="mt-1 text-danger">Xóa tin nhắn</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="chat-box-col-right" style={{padding: 15}}>
            <div className="d-flex box-chart-user align-items-center">
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
            </div>
            <div className="d-flex box-chart-user align-items-center">
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
            </div>
            <div className="d-flex box-chart-guest align-items-center justify-content-end">
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
            </div>
            <div className="d-flex box-chart-guest align-items-center justify-content-end">
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
            </div>
            <div className="d-flex box-chart-guest align-items-center justify-content-end">
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
            </div>
            <div className="d-flex box-chart-guest align-items-center justify-content-end">
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
            </div>
            <div className="d-flex box-chart-guest align-items-center justify-content-end">
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
            </div>
            <div className="d-flex box-chart-guest align-items-center justify-content-end">
              <div className="boxMessage">
                Đây là nội dung tin nhắn 1
              </div>
              <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
            </div>  
            <div className="d-flex box-chart-user align-items-center">
            <img
                    alt="dep-ic"
                    className="dep-ic"
                    src={depIc}
                    width="45"
                    height="45"
                />
              <div className="boxMessage">
                Đây là nội dung tin nhắn 2
              </div>
             
            </div>
        </div>
        <div className="box-input-chat d-flex p-2 justify-content-center align-items-center">
            <TextareaAutosize
              className="h-100 form-control textareaAutosize"
              placeholder="Nhập tin nhắn cho Dương"
              minRows={1}
              maxRows={4}
              style={{border: 0}}
            />
            <button className="btn btn-outline text-bold">Gửi</button>
        </div>
      </div>
    );
  }
}

export default TableProject;
