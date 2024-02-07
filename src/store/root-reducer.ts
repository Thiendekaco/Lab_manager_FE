import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { laboratoriesReducer } from "./laboratories/laboratories.reducer";
import { memberReducer } from "./member/member.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  laboratories: laboratoriesReducer,
  member : memberReducer
});
