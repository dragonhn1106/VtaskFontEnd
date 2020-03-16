import * as actionTypes from "../constants/actionTypes";
import { apiService } from "../constants/axiosInstant";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (accessToken, refreshToken, groupActive) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    accessToken: accessToken,
    refreshToken: refreshToken,
    groupActive: groupActive
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password
    };
    apiService
      .post("login", authData)
      .then(response => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("group-active", response.data.group_active);
        apiService.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        apiService.defaults.headers.common["group-active"] =
          response.data.group_active;
        dispatch(
          authSuccess(
            response.data.accessToken,
            response.data.refreshToken,
            response.data.group_active
          )
        );
      })
      .catch(err => {
        console.log(err);

        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const accessToken = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    const group_active = localStorage.getItem("group-active");
    apiService.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    apiService.defaults.headers.common["group-active"] = group_active;
    dispatch(authSuccess(accessToken, refreshToken));
  };
};
