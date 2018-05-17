import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListDataReducer from './AppReducer';

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer,
  AppReducer: AppReducer,
  ListDataReducer: ListDataReducer,
});
