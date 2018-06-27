import {
  MODIFY_HOURS,
  MODIFY_MINUTES,
  MODIFY_QUANTITY,
  REGISTER_IN_PROGRESS,
  REGISTER_DATA_SUCCESS,
  REGISTER_DATA_ERROR,
  REMOVE_DATA_SUCCESS,
  REMOVE_DATA_ERROR,
  CONTADOR,
} from '../actions/types';

const INITIAL_STATE = {
  hours: '',
  quantity: '',
  minutes: '',
  contador: 0,
  errorRegisterData: '',
  removeDataSuccess: '',
  removeDataError: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_HOURS:
      return {
        ...state,
        hours: action.payload,
      };

    case MODIFY_MINUTES:
      return {
        ...state,
        minutes: action.payload,
      };

    case MODIFY_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };

    case REGISTER_IN_PROGRESS:
      return {
        ...state,
      };

    case REGISTER_DATA_SUCCESS:
      return {
        ...state,
        hours: '',
        minutes: '',
        quantity: '',
        contador: action.payload,
      };

    case REGISTER_DATA_ERROR:
      return {
        ...state,
        errorRegisterData: action.payload,
      };

    case REMOVE_DATA_SUCCESS:
      return {
        ...state,
        removeDataSuccess: action.payload,
      };

    case REMOVE_DATA_ERROR:
      return {
        ...state,
        removeDataError: action.payload,
      };

    case CONTADOR:
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};
