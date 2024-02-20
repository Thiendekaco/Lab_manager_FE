import { LABORATORIES_ACTION_TYPES } from "./laboratories.types";
import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import {UserData, AdditionalInformation, LaboratoryInterface, Member} from "../../types";
import { Action, ActionWithPayLoad } from '../../utils/reducer/reducer.utils';
import { User } from 'firebase/auth';




export type GetAllListLabStart = Action<LABORATORIES_ACTION_TYPES.GET_ALL_LABORATORY_START>

export const getListLabStart = withMatcher(
  (): GetAllListLabStart =>
    createAction(LABORATORIES_ACTION_TYPES.GET_ALL_LABORATORY_START)
)

export type  GetAllListLabSuccess = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.GET_ALL_LABORATORY_SUCCESS, LaboratoryInterface[]>
export const getListLabSuccess =withMatcher(
  (labList : LaboratoryInterface[]) : GetAllListLabSuccess=>
    createAction(LABORATORIES_ACTION_TYPES.GET_ALL_LABORATORY_SUCCESS, labList)
)

export const getListLabFailed = (error : Error) =>
  createAction(LABORATORIES_ACTION_TYPES.GET_ALL_LABORATORY_FAILED, error);



////

export type GetListLabStart = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.GET_LABORATORY_START, { nameLab: string }>

export const getLabStart = withMatcher(
  (nameLab: string): GetListLabStart =>
    createAction(LABORATORIES_ACTION_TYPES.GET_LABORATORY_START, {nameLab})
)

export type GetListLabSuccess = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.GET_LABORATORY_SUCCESS, LaboratoryInterface>;

export const getLabSuccess = withMatcher(
  ( lab : LaboratoryInterface ): GetListLabSuccess =>
    createAction(LABORATORIES_ACTION_TYPES.GET_LABORATORY_SUCCESS, lab)
)

export const getLabFailed = ( error : Error ) => createAction(LABORATORIES_ACTION_TYPES.GET_LABORATORY_FAILED, error);


////


export type GetListMemberPendingStart = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.GET_LIST_MEMBER_PENDING_START, { nameLab : string}>
export const getListMemberPendingStart = withMatcher(
  ( nameLab : string): GetListMemberPendingStart =>
    createAction(LABORATORIES_ACTION_TYPES.GET_LIST_MEMBER_PENDING_START, { nameLab})
)

export type GetListMemberPendingSuccess = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.GET_LIST_MEMBER_PENDING_SUCCESS, Member[]>
export const getListMemberPendingSuccess = withMatcher(
  ( memberList : Member[] ): GetListMemberPendingSuccess =>
    createAction(LABORATORIES_ACTION_TYPES.GET_LIST_MEMBER_PENDING_SUCCESS, memberList)
)

export const getListMemberPendingFailed = ( error : Error ) => createAction(LABORATORIES_ACTION_TYPES.GET_LIST_MEMBER_PENDING_FAILED, error);


////

export type CreateNewLabStart = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.CREATE_LABORATORY_START, { lab: LaboratoryInterface, admin : string }>

export const createNewLabStart = withMatcher(
  ( lab : LaboratoryInterface, admin: string): CreateNewLabStart =>
    createAction(LABORATORIES_ACTION_TYPES.CREATE_LABORATORY_START, {lab, admin})
)

export type CreateNewLabSuccess = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.CREATE_LABORATORY_SUCCESS, LaboratoryInterface>
export const createNewLabSuccess = withMatcher(
  ( lab : LaboratoryInterface): CreateNewLabSuccess =>
    createAction(LABORATORIES_ACTION_TYPES.CREATE_LABORATORY_SUCCESS, lab)
)

export const createNewLabFailed = ( error : Error ) => createAction(LABORATORIES_ACTION_TYPES.CREATE_LABORATORY_FAILED, error);


////

export type RemoveLaboratoryStart = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.REMOVE_LABORATORY_START, { nameLab : string}>

export const removeLaboratoryStart = withMatcher(
  ( nameLab : string ): RemoveLaboratoryStart =>
    createAction(LABORATORIES_ACTION_TYPES.REMOVE_LABORATORY_START, {nameLab})
)

export type RemoveLaboratorySuccess = ActionWithPayLoad<LABORATORIES_ACTION_TYPES.REMOVE_LABORATORY_SUCCESS, boolean>
export const removeLaboratorySuccess = withMatcher(
  ( isSuccess : boolean): RemoveLaboratorySuccess =>
    createAction(LABORATORIES_ACTION_TYPES.REMOVE_LABORATORY_SUCCESS, isSuccess)
)

export const removeLaboratoryFailed = ( error : Error ) => createAction(LABORATORIES_ACTION_TYPES.REMOVE_LABORATORY_FAILED, error);

