import { AnyAction } from 'redux';
import { LaboratoryState } from "../../types";
import {
  setLabSuccess,
  addMemberSuccess,
  rejectMemberSuccess,
  setRoleMemberSuccess,
  acceptResearchSuccess,
  rejectResearchSuccess,
  getMemberWaitListSuccess,
  getResearchWaitListSuccess,
  removeMemberSuccess
} from "./laboratory.action";



const INITIAL_STATE: LaboratoryState = {
  lab: null,
  postPending: [],
  memberPending: [],
  isLoading: false,
  error: null,
};

export const laboratoryReducer = (
  state = INITIAL_STATE,
  action: AnyAction): LaboratoryState => {

  if(setLabSuccess.match(action)){
    return {...state, lab : action.payload }
  }
  if(getMemberWaitListSuccess.match(action)){
    return {...state, memberPending: action.payload }
  }
  if(getResearchWaitListSuccess.match(action)){
    return {...state, postPending: action.payload }
  }
  if (addMemberSuccess.match(action)){
    return {...state, memberPending: action.payload }
  }
  if(rejectMemberSuccess.match(action)){
    return {...state, memberPending: action.payload }
  }
  if(setRoleMemberSuccess.match(action)){

    const laboratoryDetail = state.lab?.laboratoryDetail;
    if(laboratoryDetail){

      laboratoryDetail.members = laboratoryDetail.members.map((member)=> {
        if(member.user?.email === action.payload.user?.email){
          member.role = action.payload.role
        }
        return member;
      })
      return {
        ...state,
        lab: {
          ...state.lab,
          laboratoryDetail
        }
      }
    }

  }
  if(removeMemberSuccess.match(action)){
    return {
      ...state,
      memberPending : action.payload
    }
  }
  if(acceptResearchSuccess.match(action)){
    return {...state,
        postPending: action.payload
    }
  }
  if(rejectResearchSuccess.match(action)){
    return {
      ...state,
      postPending: action.payload
    }
  }

  return state;

}
