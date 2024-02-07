import { createSelector } from "reselect";

import {MemberState} from "../../types";
import { RootState } from "../store";


export const selectListLabReducer = (state : RootState) : MemberState => state.member


export const selectMember = createSelector(
  selectListLabReducer,
  (memberReducer) => memberReducer.currentMember
)

export const selectPost = createSelector(
  selectListLabReducer,
  (memberReducer) => memberReducer.currentPost
)
