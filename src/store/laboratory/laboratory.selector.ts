import { createSelector } from "reselect";
import { RootState } from "../store";
import { LaboratoryState } from "../../types";



export const selectLabReducer = (state : RootState) : LaboratoryState => state.laboratory;

export const selectLaboratory = createSelector(
  selectLabReducer,
  (laboratoryReducer) => laboratoryReducer.lab
)

export const selectMemberPending = createSelector(
  selectLabReducer,
  (laboratoryReducer) => laboratoryReducer.memberPending
)

export const selectResearchPending = createSelector(
  selectLabReducer,
  (laboratoryReducer) => laboratoryReducer.postPending
)
