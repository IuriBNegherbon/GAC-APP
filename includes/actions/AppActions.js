import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import {
  MODIFY_HOURS,
  MODIFY_MINUTES,
  MODIFY_QUANTITY,
  REGISTER_DATA_SUCCESS,
  REGISTER_DATA_ERROR,
  REGISTER_IN_PROGRESS,
} from './types';

export const modifyHours = (input) => {
  return {
    type: MODIFY_HOURS,
    payload: input,
  };
};

export const modifyMinutes = (input) => {
  return {
    type: MODIFY_MINUTES,
    payload: input,
  };
};

export const modifyQuantity = (input) => {
  return {
    type: MODIFY_QUANTITY,
    payload: input,
  };
};

export const registerData = ({ hours, minutes, quantity, contador }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_IN_PROGRESS });
    const { currentUser } = firebase.auth();
    const emailUserB64 = b64.encode(currentUser.email);
    firebase.database().ref(`/users/${emailUserB64}/user_data/`).once('value', (snapshot) => {
      const usuario = _.first(_.values(snapshot.val()));
      firebase.database()
        .ref(`${usuario.number}/user_data/${contador}`)
        .set({ user_data_hora: hours, user_data_minuto: minutes, user_data_racao: quantity, user_data_ativo: 1 })
        .then(() => {
          registerDataSuccess(dispatch, contador);
        })
        .catch(error => registerDataError(error.message, dispatch));
    });
  };
};

const registerDataSuccess = (dispatch, contador) => {
  dispatch({
    type: REGISTER_DATA_SUCCESS,
    payload: contador+1,
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
  const emailUserB64 = b64.encode(currentUser.email);

  return (dispatch) => {
    firebase.database().ref(`/users/${emailUserB64}/user_data/`).once('value', (snapshot) => {
      const usuario = _.first(_.values(snapshot.val()));
      firebase.database().ref(`${usuario.number}/user_data/`).on('value', (snap) => {
        dispatch({
          type: LIST_DATA,
          payload: snap.val(),
        });
      });
    });
  };
};
