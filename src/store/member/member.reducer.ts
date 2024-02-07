


import { AnyAction } from 'redux';
import {MemberState} from "../../types";
import {
  getInformationMemberSuccess,
  getResearchListSuccess,
  leaveLabSuccess
} from "./member.action";




const INITIAL_STATE: MemberState = {
  currentMember: null,
  currentPost: [],
  isLoading: false,
  error: null,
};

export const memberReducer = (
  state = INITIAL_STATE,
  action: AnyAction): MemberState => {

  if(getInformationMemberSuccess.match(action)){
    return { ...state, currentMember: action.payload };
  }else if (getResearchListSuccess.match(action)){
    return {...state, currentPost: action.payload}
  }else if(leaveLabSuccess.match(action)){
    return {...state, currentMember: {
      ...state.currentMember,
        laboratories : state.currentMember?.laboratories?.filter(lab => lab.nameLab !== action.payload.nameLab)
      }}
  }

  return state;

}
