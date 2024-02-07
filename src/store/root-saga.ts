import { all, call } from 'typed-redux-saga/macro';

import { userSagas } from './user/user.saga';
import {laboratoriesSagas} from "./laboratories/laboratories.saga";
import {memberSagas} from "./member/member.saga";

export function* rootSaga() {
  yield all([call(userSagas), call(laboratoriesSagas), call(memberSagas)]);
}
