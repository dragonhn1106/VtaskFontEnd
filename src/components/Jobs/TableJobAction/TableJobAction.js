import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiStar,
  mdiAccountCircleOutline ,
  mdiMovieRoll,
  mdiMagnify ,
  mdiDownload ,
  mdiCalendarRange ,
  mdiDotsVertical,
  mdiAccountCardDetailsOutline,
  mdiFlowerPoppy,
  mdiViewDashboard,
  mdiAccountCardDetails
} from "@mdi/js";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import { Modal } from "react-bootstrap";
import './TableJobAction.css';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class TableJobAction extends Component {
  state = {
    showCreateJob: false,
  };

  onChangeInviteMessage = (e) => {
    this.setState({
      inviteMessage: e.target.value
    })
  }

  closeCreateJobModal = () => {
    this.setState({
      showCreateJob: false
    });
  };
  showCreateJobModal = e => {
    e.preventDefault();
    this.setState({ showCreateJob: true });
  };
  OnActiveClassName=()=>{
    if(this.props.location.pathname === '/cong-viec/nhom-viec'){
      return 'd-block h-100 d-flex flex-column align-items-center justify-content-center active';
    }
    else{
      return 'd-block h-100 d-flex flex-column align-items-center justify-content-center';
    }
  }
  render() {
    // console.log(this.props.match.path);
    return (
      <div className="MainRight__action d-sm-flex justify-content-between align-items-center">
        <div className="ml-3 mb-2 d-flex">
          <Icon path={mdiStar} size={1} color="#31b586" />
          <div>
            <div>
              <strong className="ml-2 text-green">{this.props.title} </strong>
            </div>
            <small className="ml-2">{this.props.children}</small>
          </div>
        </div>

        <div className="d-sm-flex align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <Link
                className={this.props.location.pathname === '/cong-viec/thanh-vien' ? 'd-block h-100 d-flex flex-column align-items-center justify-content-center active' : 'd-block h-100 d-flex flex-column align-items-center justify-content-center'}
                to={`${this.props.match.path}/thanh-vien`}
              >
                 <div>
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </div>

                <div className="mt-1">Thành viên</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={this.props.location.pathname === '/cong-viec/nhom-viec' ? 'd-block h-100 d-flex flex-column align-items-center justify-content-center active' : 'd-block h-100 d-flex flex-column align-items-center justify-content-center'}
                to={`${this.props.match.path}/nhom-viec`}
              >
                 <div>
                  <Icon path={mdiMovieRoll} size={1} />
                </div>

                <div className="mt-1">Nhóm việc</div>
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <div>
                  <Icon path={mdiMagnify } size={1} />
                </div>

                <div className="mt-1">Tìm kiếm</div>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <div>
                  <Icon path={mdiDownload } size={1} />
                </div>

                <div className="mt-1">Tải Xuống</div>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <div>
                  <Icon path={mdiCalendarRange } size={1} />
                </div>

                <div className="mt-1">Năm 2019</div>
              </a>
            </li>
            <li className="nav-item more-menu">
              <Dropdown className="d-block h-100 d-flex flex-column align-items-center justify-content-center">
                <Dropdown.Toggle as={CustomToggle}>
                  <Icon path={mdiDotsVertical} size={1} />
                  <div>THÊM</div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/">
                    <Icon path={mdiAccountCardDetailsOutline} size={1} />
                    &nbsp;&nbsp; Quản lý chức danh
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">
                    <Icon path={mdiAccountCardDetails} size={1} />
                    &nbsp;&nbsp;Quản lý vai trò
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">
                    <Icon path={mdiFlowerPoppy} size={1} />
                    &nbsp;&nbsp;Quản lý biểu tượng
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">
                    <Icon path={mdiViewDashboard} size={1} />
                    &nbsp;&nbsp;Cài đặt bảng
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button
            className="btn btn-warning mr-3 text-uppercase"
            onClick={this.showCreateJobModal}
          >
            + TẠO Công Việc
          </button>
        </div>
        {/* Modal Add  Department */}
        <Modal
          show={this.state.showCreateJob}
          onHide={this.closeCreateJobModal}
        >
          <Modal.Header closeButton>
            <span>Tạo tài khoản</span>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <label>Nhập địa chỉ email</label>
              </div>
              <input
                type="text"
                className="form-control input-modal"
                value={this.state.email}
              />
            </div>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <label>Nhập lời mời tạo tài khoản của bạn</label>
              </div>
              <input
                type="text"
                className="form-control input-modal"
                onChange={this.onChangeInviteMessage}
                value={this.state.inviteMessage}
              />
            </div>
            <div className="description mt-2 mb-5">
              <div>
                <i className="text-warning">
                  Chúng tôi sẽ gửi một email tới địa chỉ email nêu trên để yêu
                  cầu thành viên này đăng ký tài khoản trên VTASK.
                </i>
              </div>
              <div><i className="text-warning">Vui lòng nhập email chính xác và đang hoạt động</i></div>
              <div><i className="text-warning">Hoặc bạn có thể liên hệ thành viên để yêu cầu đăng ký tài khoản trực tiếp trên www.vtask.net</i></div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal">HOÀN THÀNH</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withRouter(TableJobAction);
