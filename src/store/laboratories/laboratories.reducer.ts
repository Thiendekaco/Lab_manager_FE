

import { AnyAction } from 'redux';
import { LaboratoryState } from "../../types";
import {
  createNewLabSuccess,
  getListLabSuccess,
} from "./laboratories.action";



const INITIAL_STATE: LaboratoryState = {
  listLab: [],
  isLoading: false,
  error: null,
};

export const laboratoriesReducer = (
  state = INITIAL_STATE,
  action: AnyAction): LaboratoryState => {

  if(getListLabSuccess.match(action)){
    return { ...state, listLab: action.payload };
  }else if (createNewLabSuccess.match(action)){
    return {...state, listLab: [...state.listLab, action.payload]}
  }

  return state;

}
