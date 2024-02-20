import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { laboratoriesReducer } from "./laboratories/laboratories.reducer";
import { memberReducer } from "./member/member.reducer";
import { laboratoryReducer } from "./laboratory/laboratory.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  laboratories: laboratoriesReducer,
  member : memberReducer,
  laboratory: laboratoryReducer
});
