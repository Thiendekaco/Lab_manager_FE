import { createSelector } from "reselect";

import { UserState } from "../../types";
import { RootState } from "../store";

export const selectUserReducer = (state : RootState) : UserState => state.user


export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
)
