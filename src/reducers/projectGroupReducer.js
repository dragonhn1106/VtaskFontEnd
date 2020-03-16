import * as actionTypes from "../constants/actionTypes";

const initialState = {
  projectGroup: [
    {
      id: 1,
      avatar: "",
      name: "Nhóm Kinh doanh VTASK",
      members: 5,
      projectCount: 2
    },
    {
      id: 2,
      avatar: "",
      name: "Phòng hành chính tổng hợp",
      members: 10,
      projectCount: 2
    },
    {
      id: 3,
      avatar: "",
      name: "Nhóm dev",
      members: 10,
      projectCount: 1
    },
    {
      id: 4,
      avatar: "",
      name: "Phòng lập trình Adndroid",
      members: 10,
      projectCount: 1
    }
  ]
};

const move = (array, oldIndex, newIndex) => {
  const arr = array.splice(oldIndex, 1);
  array.splice(newIndex, 0, arr[0]);
  return array;
};

const projectGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DRAG_PROJECT_GROUP: {
      var newProjectGroup = move(
        [...state.projectGroup],
        action.payload.oldIndex,
        action.payload.newIndex
      );

      return { ...state, projectGroup: newProjectGroup };
    }
    default:
      return state;
  }
};

export default projectGroupReducer;
