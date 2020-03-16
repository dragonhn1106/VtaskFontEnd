import * as actionTypes from "../constants/actionTypes";

export const dragProjectGroup = (oldIndex, newIndex) => {
  return {
    type: actionTypes.DRAG_PROJECT_GROUP,
    payload: { oldIndex, newIndex }
  };
};
