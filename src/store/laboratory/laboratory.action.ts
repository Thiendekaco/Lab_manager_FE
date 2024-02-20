import {Action, ActionWithPayLoad, createAction, withMatcher} from "../../utils/reducer/reducer.utils";
import {LABORATORY_ACTION_TYPES} from "../laboratory/laboratory.types";
import {LaboratoryInterface, MemberLabInterface, PostOfMemberInterface, RoleEnum} from "../../types";


export type SetLabStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.SET_LABORATORY_START, string>

export const setLabStart = withMatcher(
  (nameLab: string): SetLabStart =>
    createAction(LABORATORY_ACTION_TYPES.SET_LABORATORY_START, nameLab)
)

export type  SetLabSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.SET_LABORATORY_SUCCESS, LaboratoryInterface>
export const setLabSuccess =withMatcher(
  (labList : LaboratoryInterface) : SetLabSuccess=>
    createAction(LABORATORY_ACTION_TYPES.SET_LABORATORY_SUCCESS, labList)
)

export const setLabFailed = (error : Error) =>
  createAction(LABORATORY_ACTION_TYPES.SET_LABORATORY_FAILED, error);



///

export type AddMemberStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.ADD_MEMBER_START, { nameLab: string, email: string}>

export const addMemberStart = withMatcher(
  (nameLab: string, email: string): AddMemberStart =>
    createAction(LABORATORY_ACTION_TYPES.ADD_MEMBER_START, {nameLab, email})
)


export type AddMemberSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.ADD_MEMBER_SUCCESS, MemberLabInterface[]>


export const addMemberSuccess = withMatcher(
  (listMember : MemberLabInterface[]): AddMemberSuccess =>
    createAction(LABORATORY_ACTION_TYPES.ADD_MEMBER_SUCCESS, listMember)
)

export const addMemberFailed = ( error: Error) => createAction(LABORATORY_ACTION_TYPES.ADD_MEMBER_FAILED, error);


///

export type RejectMemberStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REJECT_MEMBER_START, { email: string, nameLab: string}>

export const rejectMemberStart = withMatcher(
  (email: string, nameLab: string) : RejectMemberStart => createAction(LABORATORY_ACTION_TYPES.REJECT_MEMBER_START, { email, nameLab })
)


export type RejectMemberSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REJECT_MEMBER_SUCCESS, MemberLabInterface[]>

export const rejectMemberSuccess = withMatcher(
  (memberWaitList : MemberLabInterface[]): RejectMemberSuccess => createAction(LABORATORY_ACTION_TYPES.REJECT_MEMBER_SUCCESS, memberWaitList)
)

export const rejectMemberFailed = (error: Error) => createAction(LABORATORY_ACTION_TYPES.REJECT_MEMBER_FAILED, error);


////

export type SetRoleMemberStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.SET_ROLE_MEMBER_START, { role: RoleEnum, email: string, nameLab: string }>

export const setRoleMemberStart = withMatcher(
  ( role: RoleEnum, email: string, nameLab: string ): SetRoleMemberStart =>
    createAction(LABORATORY_ACTION_TYPES.SET_ROLE_MEMBER_START, { role, email, nameLab})
)

export type SetRoleMemberSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.SET_ROLE_MEMBER_SUCCESS, MemberLabInterface>

export const setRoleMemberSuccess = withMatcher(
  (member: MemberLabInterface): SetRoleMemberSuccess => createAction(LABORATORY_ACTION_TYPES.SET_ROLE_MEMBER_SUCCESS,  member )
)

export const setRoleMemberFailed = (error: Error) => createAction(LABORATORY_ACTION_TYPES.SET_ROLE_MEMBER_FAILED, error);


////


export type RemoveMemberStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REMOVE_MEMBER_START, { member:  MemberLabInterface, laboratory: LaboratoryInterface} >
export const removeMemberStart = withMatcher(
  (member: MemberLabInterface, laboratory: LaboratoryInterface): RemoveMemberStart => createAction(LABORATORY_ACTION_TYPES.REMOVE_MEMBER_START, { member, laboratory})
)

export type RemoveMemberSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REMOVE_MEMBER_SUCCESS, MemberLabInterface[]>

export const removeMemberSuccess = withMatcher(
  (memberList:MemberLabInterface[]): RemoveMemberSuccess => createAction(LABORATORY_ACTION_TYPES.REMOVE_MEMBER_SUCCESS, memberList)
)

export const removeMemberFailed = ( error: Error ) => createAction(LABORATORY_ACTION_TYPES.REMOVE_MEMBER_FAILED, error)

////


export type AcceptResearchStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.ACCEPT_RESEARCH_START, PostOfMemberInterface>

export const acceptResearchStart = withMatcher(
  (post: PostOfMemberInterface): AcceptResearchStart =>
    createAction(LABORATORY_ACTION_TYPES.ACCEPT_RESEARCH_START, post)
)

export type AcceptResearchSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.ACCEPT_RESEARCH_SUCCESS, PostOfMemberInterface[]>

export const acceptResearchSuccess = withMatcher(
  (post: PostOfMemberInterface[]): AcceptResearchSuccess =>
    createAction(LABORATORY_ACTION_TYPES.ACCEPT_RESEARCH_SUCCESS, post)
)

export const acceptResearchFailed = (error : Error) => createAction(LABORATORY_ACTION_TYPES.ACCEPT_RESEARCH_FAILED, error);

////


export type RejectResearchStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REJECT_RESEARCH_START, PostOfMemberInterface>

export const rejectResearchStart = withMatcher(
  (post : PostOfMemberInterface): RejectResearchStart => createAction(LABORATORY_ACTION_TYPES.REJECT_RESEARCH_START, post)
)


export type RejectResearchSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REJECT_RESEARCH_SUCCESS, PostOfMemberInterface[]>

export const rejectResearchSuccess = withMatcher(
  (post: PostOfMemberInterface[]): RejectResearchSuccess => createAction(LABORATORY_ACTION_TYPES.REJECT_RESEARCH_SUCCESS, post)
)

export const rejectResearchFailed = (error: Error) => createAction(LABORATORY_ACTION_TYPES.REJECT_RESEARCH_FAILED, error)

////


export type GetMemberWaitListStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_MEMBER_WAIT_START, LaboratoryInterface>

export const getMemberWaitListStart = withMatcher(
  ( laboratory: LaboratoryInterface ): GetMemberWaitListStart => createAction(LABORATORY_ACTION_TYPES.GET_MEMBER_WAIT_START, laboratory)
)

export type GetMemberWaitListSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_MEMBER_WAIT_SUCCESS, MemberLabInterface[]>

export const getMemberWaitListSuccess = withMatcher(
  (memberWaits: MemberLabInterface[]): GetMemberWaitListSuccess => createAction(LABORATORY_ACTION_TYPES.GET_MEMBER_WAIT_SUCCESS, memberWaits)
)

export const getMemberWaitListFailed = (error: Error) => createAction(LABORATORY_ACTION_TYPES.GET_MEMBER_WAIT_FAILED, error)


////

export type GetResearchWaitListStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_RESEARCH_WAIT_START, LaboratoryInterface>

export const getResearchWaitListStart = withMatcher(
  ( laboratory: LaboratoryInterface ): GetResearchWaitListStart => createAction(LABORATORY_ACTION_TYPES.GET_RESEARCH_WAIT_START, laboratory)
)

export type GetResearchWaitListSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_RESEARCH_WAIT_SUCCESS, PostOfMemberInterface[]>

export const getResearchWaitListSuccess = withMatcher(
  (postWaits: PostOfMemberInterface[]): GetResearchWaitListSuccess => createAction(LABORATORY_ACTION_TYPES.GET_RESEARCH_WAIT_SUCCESS, postWaits)
)

export const getResearchWaitListFailed = (error: Error) => createAction(LABORATORY_ACTION_TYPES.GET_RESEARCH_WAIT_FAILED, error)
