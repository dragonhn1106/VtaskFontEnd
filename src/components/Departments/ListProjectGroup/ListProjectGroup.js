import React, { Component } from "react";
import depIc from "../../../assets/dep-ic.png";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import "./ListProjectGroup.css";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { List } from "react-movable";
import { dragProjectGroup } from "../../../actions";
import { mdiDragVertical } from "@mdi/js";
import { NavLink } from "react-router-dom";

class ListProjectGroup extends Component {
  state = {
    showDepartment: false,
    showIcon: false
  };
  showDepartmentModal = e => {
    e.preventDefault();
    this.setState({ showDepartment: true });
  };
  closeDepartmentModal = () => {
    this.setState({ showDepartment: false });
  };
  closeIconModal = () => {
    this.setState({ showIcon: false });
  };

  render() {
    return (
      <div className="ListProjectGroup">
        <div className="ListProjectGroup__header">
          <span>Thêm cuộc hội thoại mới</span>
          <a
            href="/"
            className="none-decoration pull-right"
            onClick={this.showDepartmentModal}
          >
            <Icon path={mdiPlus} size={1.2} />
          </a>
        </div>
        <div className="mainleft__header2 gray-bg">
          <strong>Tất cả</strong> &nbsp;<small>(21 Cuộc hội thoại)</small>
        </div>

        {/* List Department  */}

        <List
          values={this.props.projectGroupReducer.projectGroup}
          onChange={({ oldIndex, newIndex }) =>
            this.props.onDrag(oldIndex, newIndex)
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{
                padding: "0em 0em 1em 0em",
                cursor: isDragged ? "grabbing" : "inherit"
              }}
              className="p-0 m-0"
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                listStyleType: "none",
                cursor: isDragged ? "grabbing" : "inherit",
                backgroundColor: isDragged || isSelected ? "#EEE" : "#FFF",
                padding: "8px 15px",
              }}
              className="department-icon not-outline-focus"
            >
              <NavLink
                to="/tin-nhan"
                className="nav-link"
                // avtiveClassName="selected"
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span
                  data-movable-handle
                  style={{
                    cursor: isDragged ? "grabbing" : "grab"
                  }}
                  tabIndex={-1}
                >
                  <Icon path={mdiDragVertical} size={1} />
                </span>
                <img
                  alt="dep-ic"
                  className="dep-ic"
                  src={depIc}
                  width="45"
                  height="45"
                />
                <div className="ml-3">
                  {value.name} <small>({value.projectCount})</small>
                </div>
              </NavLink>
            </li>
          )}
        />
        {/* Modal Add  Department */}
        <Modal
          show={this.state.showDepartment}
          onHide={this.closeDepartmentModal}
        >
          <Modal.Header closeButton>
            <span>Tạo cuộc hội thoại mới</span>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <label>Tên người dùng</label>
                <i className="text-danger">(Tối đa 150 ký tự)</i>
              </div>
              <input type="text" className="form-control input-modal" />
            </div>
            <div className="form-group mt-5">
              <div className="label d-flex justify-content-between">
                <label>Nội dung tin nhắn</label>
                <i className="text-danger">Bạn chưa nhập nội dung</i>
              </div>
              <input type="text" className="form-control input-modal" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal text-uppercase">Hoàn thành</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectGroupReducer: state.projectGroupReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrag: (oldIndex, newIndex) =>
      dispatch(dragProjectGroup(oldIndex, newIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProjectGroup);
