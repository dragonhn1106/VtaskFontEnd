import React, { Component } from "react";
import "./JobGroupLeft.css";
import Icon from "@mdi/react";

import {
    mdiPlus,
    mdiChevronLeft,
    mdiDotsVertical
  } from "@mdi/js";
  import { Modal } from "react-bootstrap";
class JobGroupLeft extends Component {
    constructor(props){
        super(props);
        this.state={
            showAddGroupJob : false,
            showChonViecCoSan: false,
        }
    }
   
    showAddGroupJobModal = e => {
        e.preventDefault();
        this.setState({ showAddGroupJob: true });
    };
    showChonViecCoSanModal = () => {
        this.setState({ showAddGroupJob: true });
    };

    closeAddGroupJobModal = () => {
        this.setState({
            showAddGroupJob: false
        });
    };
    closeChonViecCoSanModal = () => {
        this.setState({
            showChonViecCoSan: false
        });
    };
  render() {
    return (
      <div className="JobInformationLeft">
        <div className="JobInformationLeft__header d-flex flex-row justify-content-between text-center">
            <a className="" href="/">
                <Icon path={mdiChevronLeft} size={1} />
            </a>
            <h1 className="text-uppercase m-0">Nhóm dự án</h1>
            <a className="" href="/" onClick={this.showAddGroupJobModal}>
                <Icon path={mdiPlus} size={1} />
            </a>

        </div>
        <div className="JobInformationLeft__header2"></div>
        <div className="job_information">
            <div style={{ width: "90%", margin: "auto" }}>
                <ul>
                    <li className="d-flex justify-content-between">
                        <label className="TableDocumentRow_container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <p>Tất Cả</p>
                        <div>
                            <a className="" href="/">
                                <Icon path={mdiDotsVertical} size={1} />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* modal add group job */}
        <Modal
          show={this.state.showAddGroupJob}
          onHide={this.closeAddGroupJobModal}
        >
          <Modal.Header closeButton>
            <span>Thêm nhóm công việc</span>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <div className="d-flex justify-content-start w-100">
                    <div className="w-25">
                        <a href="void:javscript(0)" className="font-weight-bold text-dark" onClick={this.showChonViecCoSanModal}> Tạo mới</a>
                    </div>
                    <div className="w-75"><p className="m-auto">Chọn từ nhóm việc đã tạo</p></div>
                </div>
              </div>
            </div>
            <div className="under-line" style={{width: "100%",height:'3px', backgroundColor: 'rgba(204, 204, 204,0.3)', borderRadius: '5px'}}></div>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <label>Tên nhóm việc</label>
              </div>
              <input
                type="text"
                className="form-control input-modal"
                onChange={this.onChangeEmail}
                value={this.state.email}
              />
            </div>
            <div className="form-group mt-3 mb-5">
              <div className="label d-flex justify-content-between">
                <label>Mô tả</label>
              </div>
              <input
                type="text"
                className="form-control input-modal"
                onChange={this.onChangeInviteMessage}
                value={this.state.inviteMessage}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal">Tạo Mới</button>
          </Modal.Footer>
        </Modal>
        {/* end modal add group job */}
      </div>
    );
  }
}

export default JobGroupLeft;
