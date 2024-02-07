import { takeLatest, put, all, call } from 'typed-redux-saga/macro';

import {MEMBER_ACTION_TYPES} from "./member.types";


import {
  joinLabStart,
  joinLabFailed,
  joinLabSuccess,
  getResearchListSuccess,
  getInformationMemberStart,
  getInformationMemberSuccess,
  getResearchListFailed,
  getResearchListStart,
  leaveLabSuccess,
  leaveLabFailed,
  leaveLabStart,
  GetInformationMemberStart,
  getInformationMemberFailed,
  GetResearchListStart,
  JoinLabStart, LeaveLabStart
} from "./member.action";

import {Member, PostOfMemberInterface} from "../../types";
import { deleteMemberInLab, getInformationOfMember, getResearchListOfMember, putMemberJoinIntoLab } from "../../api/clientApi";
import {createAction} from "../../utils/reducer/reducer.utils";


export function* getInformationOfMember_({ payload: { email }} : GetInformationMemberStart) {
  try{
    const inFormation : Member[] = yield * call(getInformationOfMember, email)
    yield * put(getInformationMemberSuccess(inFormation[0]))
  }catch (e){
    yield* put(getInformationMemberFailed(e as Error))
  }
}

export function* getResearchList ({ payload : { email }} : GetResearchListStart) {
  try {
    const lisPost : PostOfMemberInterface[] = yield * call(getResearchListOfMember, email );
    yield * put (getResearchListSuccess(lisPost));
  }catch (e) {
    yield * put(getResearchListFailed(e as Error))
  }
}

export function* joinLabForMember ({ payload : { email, nameLab }} : JoinLabStart) {
  try {
   yield * call(putMemberJoinIntoLab, email, nameLab );
    yield * put (joinLabSuccess);
    yield * call (getInformationOfMember_, createAction(MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_START, { email }))
  }catch (e) {
    yield * put(getResearchListFailed(e as Error))
  }
}

export function  * leaveLabForMember ({ payload:{ email, nameLab }} : LeaveLabStart) {
  try {
    yield * call(deleteMemberInLab, email, nameLab)
    yield * put (leaveLabSuccess);
  }catch (e){
    yield * put(leaveLabFailed(e as Error))
  }
}

export function* onGetInformationMember() {
  yield* takeLatest(MEMBER_ACTION_TYPES.GET_INFORMATION_OF_MEMBER_START, getInformationOfMember_);
}

export function* onGetResearchList() {
  yield* takeLatest(MEMBER_ACTION_TYPES.GET_RESEARCH_LIST_START, getResearchList);
}

export function* onJoinIntoLab () {
  yield * takeLatest(MEMBER_ACTION_TYPES.JOIN_LAB_START, joinLabForMember)
}

export function * onLeaveToLab () {
  yield * takeLatest(MEMBER_ACTION_TYPES.LEAVE_LAB_START, leaveLabForMember)
}



export function* memberSagas() {
  yield* all([
    call(onGetInformationMember),
    call(onGetResearchList),
    call(onJoinIntoLab),
    call(onLeaveToLab)
  ]);
}
