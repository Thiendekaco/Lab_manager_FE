import { LABORATORY_ACTION_TYPES } from "./laboratories.types";
import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import {UserData, AdditionalInformation, LaboratoryInterface, Member} from "../../types";
import { Action, ActionWithPayLoad } from '../../utils/reducer/reducer.utils';
import { User } from 'firebase/auth';




export type GetAllListLabStart = Action<LABORATORY_ACTION_TYPES.GET_ALL_LABORATORY_START>

export const getListLabStart = withMatcher(
  (): GetAllListLabStart =>
    createAction(LABORATORY_ACTION_TYPES.GET_ALL_LABORATORY_START)
)

export type  GetAllListLabSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_ALL_LABORATORY_SUCCESS, LaboratoryInterface[]>
export const getListLabSuccess =withMatcher(
  (labList : LaboratoryInterface[]) : GetAllListLabSuccess=>
    createAction(LABORATORY_ACTION_TYPES.GET_ALL_LABORATORY_SUCCESS, labList)
)

export const getListLabFailed = (error : Error) =>
  createAction(LABORATORY_ACTION_TYPES.GET_ALL_LABORATORY_FAILED, error);



////

export type GetListLabStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_LABORATORY_START, { nameLab: string }>

export const getLabStart = withMatcher(
  (nameLab: string): GetListLabStart =>
    createAction(LABORATORY_ACTION_TYPES.GET_LABORATORY_START, {nameLab})
)

export type GetListLabSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_LABORATORY_SUCCESS, LaboratoryInterface>;

export const getLabSuccess = withMatcher(
  ( lab : LaboratoryInterface ): GetListLabSuccess =>
    createAction(LABORATORY_ACTION_TYPES.GET_LABORATORY_SUCCESS, lab)
)

export const getLabFailed = ( error : Error ) => createAction(LABORATORY_ACTION_TYPES.GET_LABORATORY_FAILED, error);


////


export type GetListMemberPendingStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_LIST_MEMBER_PENDING_START, { nameLab : string}>
export const getListMemberPendingStart = withMatcher(
  ( nameLab : string): GetListMemberPendingStart =>
    createAction(LABORATORY_ACTION_TYPES.GET_LIST_MEMBER_PENDING_START, { nameLab})
)

export type GetListMemberPendingSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.GET_LIST_MEMBER_PENDING_SUCCESS, Member[]>
export const getListMemberPendingSuccess = withMatcher(
  ( memberList : Member[] ): GetListMemberPendingSuccess =>
    createAction(LABORATORY_ACTION_TYPES.GET_LIST_MEMBER_PENDING_SUCCESS, memberList)
)

export const getListMemberPendingFailed = ( error : Error ) => createAction(LABORATORY_ACTION_TYPES.GET_LIST_MEMBER_PENDING_FAILED, error);


////

export type CreateNewLabStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.CREATE_LABORATORY_START, { lab: LaboratoryInterface, admin : string }>

export const createNewLabStart = withMatcher(
  ( lab : LaboratoryInterface, admin: string): CreateNewLabStart =>
    createAction(LABORATORY_ACTION_TYPES.CREATE_LABORATORY_START, {lab, admin})
)

export type CreateNewLabSuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.CREATE_LABORATORY_SUCCESS, LaboratoryInterface>
export const createNewLabSuccess = withMatcher(
  ( lab : LaboratoryInterface): CreateNewLabSuccess =>
    createAction(LABORATORY_ACTION_TYPES.CREATE_LABORATORY_SUCCESS, lab)
)

export const createNewLabFailed = ( error : Error ) => createAction(LABORATORY_ACTION_TYPES.CREATE_LABORATORY_FAILED, error);


////


export type RemoveLaboratoryStart = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REMOVE_LABORATORY_START, { nameLab : string}>

export const removeLaboratoryStart = withMatcher(
  ( nameLab : string ): RemoveLaboratoryStart =>
    createAction(LABORATORY_ACTION_TYPES.REMOVE_LABORATORY_START, {nameLab})
)

export type RemoveLaboratorySuccess = ActionWithPayLoad<LABORATORY_ACTION_TYPES.REMOVE_LABORATORY_SUCCESS, boolean>
export const removeLaboratorySuccess = withMatcher(
  ( isSuccess : boolean): RemoveLaboratorySuccess =>
    createAction(LABORATORY_ACTION_TYPES.REMOVE_LABORATORY_SUCCESS, isSuccess)
)

export const removeLaboratoryFailed = ( error : Error ) => createAction(LABORATORY_ACTION_TYPES.REMOVE_LABORATORY_FAILED, error);
