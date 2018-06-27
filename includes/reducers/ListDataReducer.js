import { LIST_DATA, LIST_NAME } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LIST_DATA:
      return action.payload;

    case LIST_NAME:
      return action.payload;

    default:
      return state;
  }
};
