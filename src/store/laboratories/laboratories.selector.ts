import { createSelector } from "reselect";

import { LaboratoriesState } from "../../types";
import { RootState } from "../store";

export const selectListLabReducer = (state : RootState) : LaboratoriesState => state.laboratories


export const selectListLab = createSelector(
  selectListLabReducer,
  (laboratoriesReducer) => laboratoriesReducer.listLab
)
