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
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  number: '',
  errorRegister: '',
  errorLogin: '',
  loadingLogin: false,
  loadingRegister: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MODIFY_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case MODIFY_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case MODIFY_NAME:
      return {
        ...state,
        name: action.payload
      }
    case MODIFY_NUMBER:
      return {
        ...state,
        number: action.payload,
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        nome: '',
        senha: '',
        loadingRegister: false
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        errorRegister: action.payload,
        loadingRegister: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        errorLogin: '',
        loadingRegister: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        errorLogin: action.payload,
        loadingLogin: false
      }
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        loadingLogin: true
      }
    case REGISTER_IN_PROGRESS:
      return {
        ...state,
        loadingRegister: true
      }
    default:
      return state;
  }
}
