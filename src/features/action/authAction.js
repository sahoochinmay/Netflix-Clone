import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
} from "../constant/authConstant";
import { auth } from "../config/firebase";

export const signIn = (email, password) => (dispatch) => {
  dispatch({
    type: AUTH_START,
    payload: null,
  });
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.user,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: null,
      });
      console.log(err);
    });
};
export const signUp = (email, password) => (dispatch) => {
  dispatch({
    type: AUTH_START,
    payload: null,
  });
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.user,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR,
        payload: null,
      });
    });
};
export const signOut = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch({
        type: AUTH_LOGOUT,
        payload: null,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
