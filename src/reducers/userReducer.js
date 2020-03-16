import * as actionTypes from "../constants/actionTypes";
import avatar from "../assets/user1.jpg";

const initialState = {
  users: {
    "user-1": {
      id: "user-1",
      avatar: avatar,
      name: "Nguyen Van A",
      birthday: "20/11/2001",
      email: "nguyenvana@vtask.vn",
      position: "Tổng giám đốc",
      gender: "Nam",
      phone: "01678.321.123",
      role: "Chủ nhóm",
      roleColor: "red",
      status: "public",
      statusBGColor: "green",
      isAdmin: 1
    }
  },
  departments: {
    "department-1": {
      id: "department-1",
      name: "Ban lãnh đạo",
      userIds: ["user-1"],
      ordering: 1
    }
  },
  departmentOrder: ["department-1"],
  user: {
    id: "",
    description: "",
    documents: [],
    date_join: "",
    email: "",
    name: "",
    avatar: "",
    birthday: "",
    gender: "",
    gender_name: "",
    phone: "",
    address: "",
    room_id: "",
    room_name: "",
    position_id: "",
    position_name: "",
    level_id: "",
    level_name: "",
    major_id: "",
    major_name: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DRAG_USER: {
      const { destination, source, draggableId } = action.result;
      // debugger;
      const start = state.departments[source.droppableId];
      const finish = state.departments[destination.droppableId];

      if (start === finish) {
        const newUserIds = Array.from(start.userIds);
        newUserIds.splice(source.index, 1);
        newUserIds.splice(destination.index, 0, draggableId);
        const newDepartment = {
          ...start,
          userIds: newUserIds
        };
        const newState = {
          ...state,
          departments: {
            ...state.departments,
            [newDepartment.id]: newDepartment
          }
        };
        return newState;
      } else {
        const startUserIds = Array.from(start.userIds);
        startUserIds.splice(source.index, 1);
        const newStart = {
          ...start,
          userIds: startUserIds
        };

        const finishUserIds = Array.from(finish.userIds);
        finishUserIds.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          userIds: finishUserIds
        };

        const newState = {
          ...state,
          departments: {
            ...state.departments,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
          }
        };
        return newState;
      }
    }
    case actionTypes.GET_USER_DETAIL: {
      return { ...state, user: action.payload };
    }
    case actionTypes.GET_USER_ALL: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
