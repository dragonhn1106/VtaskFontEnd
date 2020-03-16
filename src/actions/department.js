import * as actionTypes from "../constants/actionTypes";
import { apiService } from "../constants/axiosInstant";

export const dragDepartment = (oldIndex, newIndex) => {
  return {
    type: actionTypes.DRAG_DEPARTMENT,
    payload: { oldIndex, newIndex }
  };
};

export const createDepartmentSuccess = roomId => {
  return {
    type: actionTypes.CREATE_DEPARTMENT_SUCCESS,
    payload: roomId
  };
};

export const getDepartmentDetail = room_id => {
  return dispatch => {
    apiService
      .get("detail-room", {
        params: {
          room_id: room_id
        }
      })
      .then(response => {
        if (response.data.state === true) {
          dispatch({
            type: actionTypes.GET_DEPARTMENT_DETAIL,
            payload: response.data.room
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getUserInDepartmentSuccess = data => {
  return {
    type: actionTypes.GET_USER_IN_DEPARTMENT,
    payload: data
  };
};

export const getUserInDepartment = id => {
  return dispatch => {
    apiService
      .get("get-user-of-room")
      .then(response => {
        if (response.data.state === true) {
          dispatch(getUserInDepartmentSuccess(response.data.users));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getDepartmentSuccess = rooms => {
  return {
    type: actionTypes.GET_DEPARTMENT_SUCCESS,
    payload: rooms
  };
};

export const getDepartment = () => {
  return dispatch => {
    apiService
      .get("list-room")
      .then(response => {
        if (response.data.state === true) {
          dispatch(getDepartmentSuccess(response.data.rooms));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const dragUserInDepartment = (oldIndex, newIndex) => {
  return {
    type: actionTypes.DRAG_USER_IN_DEPARTMENT,
    payload: { oldIndex, newIndex }
  };
};

export const createDepartment = (name, icon, description) => {
  return dispatch => {
    apiService
      .post("create-room", { name, icon, description })
      .then(response => {
        if (response.data.state === true) {
          dispatch(getDepartment());
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteDepartmentSuccess = () => {
  return {
    type: actionTypes.DELETE_DEPARTMENT_SUCCESS
  };
};

export const deleteDepartment = room_id => {
  return dispatch => {
    apiService
      .delete("delete-room", { data: { room_id: room_id } })
      .then(response => {
        if (response.data.state === true) {
          dispatch(deleteDepartmentSuccess());
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
