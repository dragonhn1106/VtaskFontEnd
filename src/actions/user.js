import * as actionTypes from "../constants/actionTypes";
import { apiService } from "../constants/axiosInstant";

export const dragUser = result => {
  return {
    type: actionTypes.DRAG_USER,
    result: result
  };
};

const getUserDetailSuccess = user => {
  return {
    type: actionTypes.GET_USER_DETAIL,
    payload: user
  };
};

export const getUserDetail = id => {
  return dispatch => {
    apiService
      .get("detail-user", {
        params: {
          user_id: id
        }
      })
      .then(response => {
        if (response.data.state === true) {
          dispatch(getUserDetailSuccess(response.data.user));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getUserAllSuccess = users => {
  let usersData = {};
  let departmentsData = {};
  let departmentOrderData = [];
  let ordering = 1;

  users.map(item => {
    departmentsData[item.id] = {
      id: item.id,
      name: item.name,
      icon: item.icon,
      userIds: [],
      ordering: ordering
    };
    item.users.map(user => {
      departmentsData[item.id].userIds.push(user.id);
      usersData[user.id] = {
        id: user.id,
        avatar: user.avatar,
        name: user.name,
        birthday: user.birthday,
        email: user.email,
        position: "",
        gender: user.gender,
        phone: user.phone,
        role: user.role,
        roleColor: "#000",
        status: "public",
        statusBGColor: "green",
        isAdmin: 0
      };
      return "";
    });
    departmentOrderData.push(item.id);
    ordering++;
    return "";
  });
  return {
    type: actionTypes.GET_USER_ALL,
    payload: { departments: departmentsData, users: usersData, departmentOrder:departmentOrderData }
  };
};

export const getUserAll = () => {
  return dispatch => {
    apiService
      .get("list-users")
      .then(response => {
        if (response.data.state === true) {
          dispatch(getUserAllSuccess(response.data.users));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};