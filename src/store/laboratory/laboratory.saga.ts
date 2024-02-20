import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import { LABORATORY_ACTION_TYPES } from "./laboratory.types";
import {
  getLaboratory,
  getMemberPendingList,
  getPostPendingList,
  acceptMemberJoinLab,
  deleteMemberInLab,
  updateRoleMember
} from "../../api/clientApi";

import {
  getResearchWaitListSuccess,
  getMemberWaitListSuccess,
  getMemberWaitListStart,
  getResearchWaitListStart,
  getMemberWaitListFailed,
  getResearchWaitListFailed,
  setLabSuccess,
  setLabFailed,
  setLabStart,
  setRoleMemberSuccess,
  setRoleMemberFailed,
  setRoleMemberStart,
  rejectMemberSuccess,
  rejectMemberFailed,
  rejectMemberStart,
  rejectResearchFailed,
  rejectResearchStart,
  rejectResearchSuccess,
  removeMemberFailed,
  removeMemberStart,
  removeMemberSuccess,
  acceptResearchFailed,
  acceptResearchStart,
  acceptResearchSuccess,
  addMemberSuccess,
  addMemberFailed,
  addMemberStart,
  GetMemberWaitListStart,
  GetResearchWaitListStart,
  RejectMemberStart,
  AddMemberStart,
  SetRoleMemberStart,
} from "./laboratory.action";

import type {
  SetLabStart
}  from "./laboratory.action";
import {LaboratoryInterface} from "../../types";



function * setPrimaryLaboratory ( { payload } : SetLabStart) {
  try{
    const laboratory = yield * call(getLaboratory, payload);
    yield * put(setLabSuccess(laboratory[0]));
  }catch (e) {
    yield * put(setLabFailed(e as Error))
  }
}

function * getMemberPending ( { payload: {nameLab}} : GetMemberWaitListStart) {
  try {
    const memberList = yield * call(getMemberPendingList, nameLab);
    yield * put(getMemberWaitListSuccess(memberList))
  }catch (e) {
    yield * put(getMemberWaitListFailed(e as Error))
  }
}


function * getResearchPending ( { payload: {nameLab}} : GetResearchWaitListStart ) {
  try {
    const researchList = yield * call(getPostPendingList, nameLab);
    yield * put(getResearchWaitListSuccess(researchList));
  }catch (e) {
    yield * put(getResearchWaitListFailed(e as Error))
  }
}

function * setRejectMember({ payload: {email, nameLab} } : RejectMemberStart){
  try {
    yield * call(deleteMemberInLab, email, nameLab);
    const laboratory = yield * call(getLaboratory, nameLab);
    yield * put(rejectMemberSuccess((laboratory as LaboratoryInterface).laboratoryDetail?.members || []))
  }catch (e){
    yield * put ( rejectMemberFailed(e as Error))
  }
}


function * addMemberInLaboratory ({ payload: {nameLab, email}} : AddMemberStart) {
  try {
     yield * call(acceptMemberJoinLab, email, nameLab);
    const laboratory = yield * call(getLaboratory, nameLab);
    yield * put(addMemberSuccess((laboratory as LaboratoryInterface).laboratoryDetail?.members || []))
  }catch (e) {
    yield * put(addMemberFailed(e as Error))
  }
}

function * setRoleMember ({ payload : {role, nameLab, email} }: SetRoleMemberStart){
  try{
    const member = yield * call(updateRoleMember, email, nameLab, role);
     yield * put(setRoleMemberSuccess(member));
  }catch (e) {
    yield * put(setRoleMemberFailed(e as Error))
  }
}



export function * onSetLaboratory () {
  yield * takeLatest(LABORATORY_ACTION_TYPES.SET_LABORATORY_START, setPrimaryLaboratory)
}

export function * onGetMemberPendingLaboratory() {
  yield * takeLatest(LABORATORY_ACTION_TYPES.GET_MEMBER_WAIT_START, getMemberPending)
}

export function * onGetPostPendingLaboratory () {
  yield * takeLatest(LABORATORY_ACTION_TYPES.GET_RESEARCH_WAIT_START, getResearchPending)
}

export function * onRejectMember () {
  yield * takeLatest(LABORATORY_ACTION_TYPES.REJECT_MEMBER_START, setRejectMember )
}


export function * onAcceptMember () {
  yield * takeLatest(LABORATORY_ACTION_TYPES.ADD_MEMBER_START, addMemberInLaboratory )
}


export function * onSetRoleMember () {
  yield * takeLatest(LABORATORY_ACTION_TYPES.SET_ROLE_MEMBER_START, setRoleMember );
}


export function* laboratorySagas() {
  yield* all([
    call(onSetLaboratory),
    call(onGetMemberPendingLaboratory),
    call(onGetPostPendingLaboratory),
    call(onRejectMember),
    call(onAcceptMember),
    call(onSetRoleMember)
  ]);
}
