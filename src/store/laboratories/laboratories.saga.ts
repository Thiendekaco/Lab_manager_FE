import { takeLatest, put, all, call } from 'typed-redux-saga/macro';

import { LABORATORY_ACTION_TYPES } from "./laboratories.types";


import {
  getListLabSuccess,
  createNewLabSuccess,
  createNewLabFailed,
  getListLabFailed,
  CreateNewLabStart
} from "./laboratories.action";
import {LaboratoryInterface} from "../../types";
import {createNewLaboratory, getListLaboratory} from "../../api/clientApi";





export function* getListLab() {
  try{
    const listLab : LaboratoryInterface[] = yield * call(getListLaboratory)
    yield * put(getListLabSuccess(listLab))
  }catch (e){
    yield* put(getListLabFailed(e as Error))
  }
}

export function* createNewLab({ payload : { lab, admin  }} : CreateNewLabStart) {
  try {
    const newLabCreate = yield * call(createNewLaboratory, lab, admin );
    yield * put (createNewLabSuccess(newLabCreate));
  }catch (e) {
    yield * put(createNewLabFailed(e as Error))
  }
}

export function* onGetListAllLabs() {
  yield* takeLatest(LABORATORY_ACTION_TYPES.GET_ALL_LABORATORY_START, getListLab);
}

export function* onCreateNewLab() {
  yield* takeLatest(LABORATORY_ACTION_TYPES.CREATE_LABORATORY_START, createNewLab);
}



export function* laboratoriesSagas() {
  yield* all([
    call(onCreateNewLab),
    call(onGetListAllLabs),
  ]);
}
