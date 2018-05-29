import { LIST_DATA } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LIST_DATA:
      return action.payload;

    default:
      return state;
  }
};
