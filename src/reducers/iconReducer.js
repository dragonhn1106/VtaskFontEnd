import * as actionTypes from "../constants/actionTypes";

const initialState = {
  iconList: [],
  iconSelected: null,
  iconUploaded: null
};

const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ICON_SUCCESS: {
      return {
        ...state,
        iconUploaded: { id: action.payload.id, url: action.payload.url }
      };
    }
    case actionTypes.GET_ICON_SUCCESS: {
      return { ...state, iconList: action.payload };
    }
    case actionTypes.SELECT_ICON: {
      return {
        ...state,
        iconSelected: {
          id: action.payload.id,
          url_full: action.payload.url_full,
          url_sort: action.payload.url_sort
        }
      };
    }
    default:
      return state;
  }
};

export default iconReducer;
