import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Icon from "@mdi/react";
import { mdiCursorMove } from "@mdi/js";
import { connect } from "react-redux";
import { dragUser } from "../../../../actions";
import GroupJobByDepartment from "../../GroupJobByDepartment/GroupJobByDepartment";

class TableJobAll extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    this.props.dragUser(result);
  };
  render() {
   
    
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <td className="text-center">
                  <span>
                    <Icon path={mdiCursorMove} size={1} />
                  </span>
                </td>
                <td>Họ và tên</td>
                <td>Chức danh</td>
                <td>Năm sinh</td>
                <td>Giới tính</td>
                <td>Email</td>
                <td>Điện thoại</td>
                <td>Vai trò</td>
                <td className="text-right" style={{ width: "80px" }}>
                  Trạng thái
                </td>
                <td></td>
              </tr>
            </thead>

            <DragDropContext onDragEnd={this.onDragEnd}>
              {this.props.userReducer.departmentOrder.map(departmentId => {
                const department = this.props.userReducer.departments[
                  departmentId
                ];
                const users = department.userIds.map(
                  userId => this.props.userReducer.users[userId]
                );

                return (
                  <GroupJobByDepartment
                     key={department.id}
                    department={department}
                    users={users}
                  />
                );
              })}
            </DragDropContext>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dragUser: result => dispatch(dragUser(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableJobAll);
