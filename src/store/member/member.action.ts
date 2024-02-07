import {MEMBER_ACTION_TYPES} from "./member.types";
import {ActionWithPayLoad, createAction, withMatcher, Action} from '../../utils/reducer/reducer.utils';
import {Member, MemberLabInterface, PostOfMemberInterface} from "../../types";


export type GetInformationMemberStart = ActionWithPayLoad<MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_START, {email : string} >

export const getInformationMemberStart = withMatcher(
  (email : string) : GetInformationMemberStart=>
    createAction(MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_START, { email })
)



export type GetInformationMemberSuccess = ActionWithPayLoad<MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_SUCCESS, Member>
export const getInformationMemberSuccess = withMatcher(
  (memberList : Member): GetInformationMemberSuccess =>
    createAction(MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_SUCCESS, memberList)
)
export const getInformationMemberFailed = (e : Error) => createAction(MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_FAILED, e);

////

export type JoinLabStart = ActionWithPayLoad<MEMBER_ACTION_TYPES.JOIN_LAB_START, { email: string, nameLab: string}>

export const joinLabStart = withMatcher(
  (email : string, nameLab : string) =>
    createAction(MEMBER_ACTION_TYPES.JOIN_LAB_START, { email, nameLab})
)

export type JoinLabSuccess = Action<MEMBER_ACTION_TYPES.JOIN_LAB_SUCCESS>

export const joinLabSuccess = withMatcher(
  ()=> createAction(MEMBER_ACTION_TYPES.JOIN_LAB_SUCCESS)
)

export const joinLabFailed = (error : Error) => createAction(MEMBER_ACTION_TYPES.JOIN_LAB_FAILED, error);

//////

export type LeaveLabStart = ActionWithPayLoad<MEMBER_ACTION_TYPES.LEAVE_LAB_START, { email : string, nameLab: string}>

export const leaveLabStart = withMatcher(
  (email: string, nameLab: string) => createAction(MEMBER_ACTION_TYPES.LEAVE_LAB_START, { email, nameLab})
)

export type LeaveLabSuccess = ActionWithPayLoad<MEMBER_ACTION_TYPES.LEAVE_LAB_SUCCESS, { nameLab : string}>

export const leaveLabSuccess = withMatcher(
  (nameLab : string) => createAction(MEMBER_ACTION_TYPES.LEAVE_LAB_SUCCESS, { nameLab })
)

export const leaveLabFailed = (e : Error) => createAction(MEMBER_ACTION_TYPES.LEAVE_LAB_FAILED, e);

////

export type GetResearchListStart = ActionWithPayLoad<MEMBER_ACTION_TYPES.GET_RESEARCH_LIST_START, { email : string}>

export const getResearchListStart = withMatcher(
  (email: string) => createAction(MEMBER_ACTION_TYPES.GET_RESEARCH_LIST_SUCCESS, {email})
)

export type GetResearchListSuccess = ActionWithPayLoad<MEMBER_ACTION_TYPES.GET_RESEARCH_LIST_SUCCESS, PostOfMemberInterface[]>

export const getResearchListSuccess = withMatcher(
  (listPost : PostOfMemberInterface[]) => createAction(MEMBER_ACTION_TYPES.GET_RESEARCH_LIST_SUCCESS, listPost)
)

export const getResearchListFailed = (e : Error) => createAction(MEMBER_ACTION_TYPES.GET_RESEARCH_LIST_FAILED, e);

