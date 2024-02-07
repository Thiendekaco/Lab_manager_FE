import { createSelector } from "reselect";

import { LaboratoryState } from "../../types";
import { RootState } from "../store";

export const selectListLabReducer = (state : RootState) : LaboratoryState => state.laboratories


export const selectListLab = createSelector(
  selectListLabReducer,
  (laboratoriesReducer) => laboratoriesReducer.listLab
)
