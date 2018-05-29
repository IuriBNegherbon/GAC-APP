import {
  MODIFY_HOURS,
  MODIFY_QUANTITY,
  REGISTER_IN_PROGRESS,
  REGISTER_DATA_SUCCESS,
  REGISTER_DATA_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  hours: '',
  quantity: '',
  errorRegisterData: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case MODIFY_HOURS:
      return {
        ...state,
        hours: action.payload,
      }

    case MODIFY_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      }

    case REGISTER_IN_PROGRESS:
      return {
        ...state,
      }

    case REGISTER_DATA_SUCCESS:
      return {
        ...state,
        hours: '',
        quantity: '',
      }

    case REGISTER_DATA_ERROR:
      return {
        ...state,
        errorRegisterData: action.payload,
      }

    default:
      return state;
  }
};
