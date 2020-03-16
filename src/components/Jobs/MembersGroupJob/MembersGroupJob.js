import React, { Component } from "react";
import "./MembersGroupJob.css";
import Icon from "@mdi/react";

import {
    mdiPlus,
    mdiChevronLeft,
  } from "@mdi/js";
  import { Modal } from "react-bootstrap";
class MembersGroupJob extends Component {
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
      <div className="MembersGroupJob">
        <div className="MembersGroupJob__header d-flex flex-row justify-content-between text-center">
            <a className="" href="/">
                <Icon path={mdiChevronLeft} size={1} />
            </a>
            <h1 className="text-uppercase m-0">Thành viên dự án</h1>
            <a className="" href="/" onClick={this.showAddGroupJobModal}>
                <Icon path={mdiPlus} size={1} />
            </a>

        </div>
        <div className="MembersGroupJob__header2"></div>
        <div className="job_information">
            <div style={{ width: "90%", margin: "auto" }}>
                <ul>
                    <li className="d-flex justify-content-between">
                       
                    </li>
                </ul>
            </div>
        </div>
        {/* modal add group job */}
        <Modal
          show={this.state.showAddGroupJob}
          onHide={this.closeAddGroupJobModal}
          className="modalAddMemberGroup"
        >
          <Modal.Header closeButton>
            <span>Thêm thành viên công việc</span>
          </Modal.Header>
          <Modal.Body>
          <div className="add-members-job">
            <div className="container-fluid">
                <div className="row">
                <div className="col-4">
                    <div className="members-left">
                    <div className="fillter-member">
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="add-member-to-group">
                    <h4 className="text-uppercase">Thành Viên công việc</h4>
                    <div className="table-responsive">
                        <table className="table">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col" style={{width: '10%'}} />
                            <th scope="col">Thành viên</th>
                            <th scope="col">Nhóm quyền</th>
                            <th scope="col" style={{width: '30%'}}>Vai trò</th>
                            <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" className="ava-member"><img src="../public/images/KhuCN-bg.png" width="100%" alt="" />
                            </th>
                            <td>
                                <div className="d-flex flex-column justify-content-start align-items-start">
                                <p className="text-primary m-0">Nguyễn Hữu Thành</p>
                                <p className="text-secondary m-0">thanhnh@gmail.com</p>
                                </div>
                            </td>
                            <td className="align-middle">
                                <p className="text-danger font-weight-bold m-0 text-center">Admin</p>
                            </td>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column w-75">
                                    <div className="mb-2 bg-info text-white w-75 text-center">Giao việc</div>
                                    <div className="mb-2 bg-info text-white w-75 text-center">Giám sát</div>
                                </div>
                                <div className="ww-25">
                                    <button type="button" className="btn btn-outline-primary" style={{borderRadius: '50%'}}>
                                    <i className="fa fa-plus" aria-hidden="true" />
                                    </button>
                                </div>
                                </div>
                            </td>
                            <td className="align-middle">
                                <a href="/" className="text-muted"><i className="fa fa-ellipsis-v" aria-hidden="true" />
                                </a>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row" className="ava-member"><img src="../public/images/KhuCN-bg.png" width="100%" alt="" />
                            </th>
                            <td>
                                <div className="d-flex flex-column justify-content-start align-items-start">
                                <p className="text-primary m-0">Nguyễn Hữu Thành</p>
                                <p className="text-secondary m-0">thanhnh@gmail.com</p>
                                </div>
                            </td>
                            <td className="align-middle">
                                {/* <p className="">Admin</p> */}
                                <select className="form-control text-center" style={{borderRadius: '15px', backgroundColor: '#ccc'}}>
                                    <option>Khác</option>
                                    <option>Admin</option>
                                    <option>Bố admin</option>
                                </select>

                            </td>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column w-75">
                                    <div className="mb-2 bg-info text-white w-75 text-center">Giao việc</div>
                                    <div className="mb-2 bg-info text-white w-75 text-center">Giám sát</div>
                                </div>
                                <div className="ww-25">
                                    <button type="button" className="btn btn-outline-primary" style={{borderRadius: '50%'}}>
                                    <i className="fa fa-plus" aria-hidden="true" />
                                    </button>
                                </div>
                                </div>
                            </td>
                            <td className="align-middle">
                                <a href="/" className="text-muted"><i className="fa fa-ellipsis-v" aria-hidden="true" />&nbsp;</a>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal text-uppercase">Cập nhập</button>
          </Modal.Footer>
        </Modal>
        {/* end modal add group job */}
      </div>
    );
  }
}

export default MembersGroupJob;
