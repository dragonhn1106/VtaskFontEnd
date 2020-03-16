import * as actionTypes from "../constants/actionTypes";
import { apiService } from "../constants/axiosInstant";

export const createIconSuccess = data => {
  return {
    type: actionTypes.ADD_ICON_SUCCESS,
    payload: data
  };
};

export const getIconSuccess = icons => {
  return {
    type: actionTypes.GET_ICON_SUCCESS,
    payload: icons
  };
};

export const deleteIcon = () => {
  return {
    type: actionTypes.DELETE_ICON
  };
};

export const selectIcon = ({ id, url_full, url_sort }) => {
  return {
    type: actionTypes.SELECT_ICON,
    payload: { id, url_full, url_sort }
  };
};

export const createIcon = iconFile => {
  return dispatch => {
    let data = new FormData();
    data.append("icon", iconFile);
    apiService
      .post("create-icon", data)
      .then(response => {
        if (response.data.state === true) {
          dispatch(createIconSuccess(response.data.data_icon));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getIcon = () => {
  return dispatch => {
    apiService
      .get("list-icon")
      .then(response => {
        if (response.data.state === true) {
          dispatch(getIconSuccess(response.data.icons));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
