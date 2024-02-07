
import { signInSuccess, signOutSuccess, } from './user.action';
import { AnyAction } from 'redux';
import { UserState } from "../../types";



const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction): UserState => {

    if(signInSuccess.match(action)){
      return { ...state, currentUser: action.payload };
    }else if(signOutSuccess.match(action)){
      return { ...state, currentUser: null }
    }
    return state;
    //if(signOutFaildd.match(action) || signUp...){
      // return {...state, error : action.payload}
}
