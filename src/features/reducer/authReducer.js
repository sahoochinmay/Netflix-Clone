import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
} from "../constant/authConstant";

const initialState = {
  loading: false,
  isLogin: false,
  user: null,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
        user: payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        isLogin: false,
      };
    default:
      return state;
  }
};
export default authReducer;
