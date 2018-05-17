import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import {
  MODIFY_HOURS,
  MODIFY_QUANTITY,
  REGISTER_DATA_SUCCESS,
  REGISTER_DATA_ERROR,
  REGISTER_IN_PROGRESS,
} from './types';

export const modifyHours = (input) => {
  return {
    type: MODIFY_HOURS,
    payload: input,
  }
};

export const modifyQuantity = (input) => {
  return {
    type: MODIFY_QUANTITY,
    payload: input,
  }
};

export const registerData = ({hours, quantity}) => {
  return dispatch => {
    dispatch({ type: REGISTER_IN_PROGRESS });
    const { currentUser } = firebase.auth();
    let emailUserB64 = b64.encode(currentUser.email);
    firebase.database()
      .ref(`/user_data/${emailUserB64}`)
      .push({ hours, quantity})
      .then(() => registerDataSuccess(dispatch))
      .catch(error => registerDataError(error.message, dispatch))
  }
};

const registerDataSuccess = (dispatch) => {
  dispatch({
    type: REGISTER_DATA_SUCCESS
  });
  Actions.home();
};

const registerDataError = (error, dispatch) => {
  dispatch({
    type: REGISTER_DATA_ERROR,
    payload: error.message,
  });
};

export const dataFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    let emailUserB64 = b64.encode(currentUser.email);
    firebase.database().ref(`/user_data/${emailUserB64}`)
    .on('value', snapshot => {
      dispatch({
        type: LIST_DATA,
        payload: snapshot.val(),
      });
    });
  };
};
