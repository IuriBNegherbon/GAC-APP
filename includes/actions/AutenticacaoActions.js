import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
  MODIFY_EMAIL,
  MODIFY_PASSWORD,
  MODIFY_NAME,
  MODIFY_NUMBER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_IN_PROGRESS,
  REGISTER_IN_PROGRESS,
} from './types';

export const modifyEmail = (input) => {
  return {
    type: MODIFY_EMAIL,
    payload: input,
  };
};

export const modifyPassword = (input) => {
  return {
    type: MODIFY_PASSWORD,
    payload: input,
  };
};

export const modifyName = (input) => {
  return {
    type: MODIFY_NAME,
    payload: input,
  };
};

export const modifyNumber = (input) => {
  return {
    type: MODIFY_NUMBER,
    payload: input,
  };
};

export const registerUser = ({ name, email, password, number }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_IN_PROGRESS });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const emailB64 = b64.encode(email);
        firebase.database().ref(`/users/${emailB64}/user_data/`).push({ name, number })
          .then((value) => {
            registerUserSuccess(dispatch);
          });
      })
      .catch(error => registerUserError(error, dispatch));
  };
};

const registerUserSuccess = (dispatch) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
  });
  Actions.home();
};

const registerUserError = (error, dispatch) => {
  dispatch({
    type: REGISTER_USER_ERROR,
    payload: error.message,
  });
};

export const authUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_IN_PROGRESS });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => loginSuccess(dispatch))
      .catch(error => loginError(error, dispatch));
  };
};

const loginSuccess = (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
  });
  Actions.home();
};

const loginError = (error, dispatch) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: error.message,
  });
};
