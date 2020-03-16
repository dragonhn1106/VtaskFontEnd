import * as actionTypes from "../constants/actionTypes";

const initialState = {
  department: {
    name: "",
    description: "",
    icon: "",
    number_member: ""
  },
  done: 0,
  departments: [],
  usersInDepartment: [
  ]
};

const move = (array, oldIndex, newIndex) => {
  const arr = array.splice(oldIndex, 1);
  array.splice(newIndex, 0, arr[0]);
  return array;
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DRAG_DEPARTMENT: {
      var newUser = move(
        [...state.departments],
        action.payload.oldIndex,
        action.payload.newIndex
      );
      // console.log(state.department);

      return { ...state, departments: newUser };
    }
    case actionTypes.GET_USER_IN_DEPARTMENT: {
      return { ...state, usersInDepartment: action.payload };
    }
    case actionTypes.DRAG_USER_IN_DEPARTMENT: {
      var newUserInDepartment = move(
        [...state.usersInDepartment],
        action.payload.oldIndex,
        action.payload.newIndex
      );

      return { ...state, usersInDepartment: newUserInDepartment };
    }
    case actionTypes.GET_DEPARTMENT_DETAIL: {
      return { ...state, department: action.payload, done: 0 };
    }
    case actionTypes.GET_DEPARTMENT_SUCCESS: {
      return { ...state, departments: action.payload, done: 0 };
    }
    case actionTypes.CREATE_DEPARTMENT_SUCCESS: {
      return { ...state };
    }
    case actionTypes.DELETE_DEPARTMENT_SUCCESS: {
      return { ...state, done: 1 };
    }
    default:
      return state;
  }
};

export default departmentReducer;
