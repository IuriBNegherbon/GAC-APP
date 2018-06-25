import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListDataReducer from './ListDataReducer';

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer,
  AppReducer: AppReducer,
  ListDataReducer: ListDataReducer,
});
