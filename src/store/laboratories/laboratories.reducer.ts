

import { AnyAction } from 'redux';
import { LaboratoriesState } from "../../types";
import {
  createNewLabSuccess,
  getListLabSuccess,
} from "./laboratories.action";



const INITIAL_STATE: LaboratoriesState = {
  listLab: [],
  isLoading: false,
  error: null,
};

export const laboratoriesReducer = (
  state = INITIAL_STATE,
  action: AnyAction): LaboratoriesState => {

  if(getListLabSuccess.match(action)){
    return { ...state, listLab: action.payload };
  }else if (createNewLabSuccess.match(action)){
    return {...state, listLab: [...state.listLab, action.payload]}
  }

  return state;

}
