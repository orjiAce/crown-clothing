import {all, takeLatest, put, call} from 'redux-saga/effects'
import {clearCart} from "./cart.action";
import UserActionTypes from "../user/types";

export function* clearCartOnSignOut() {
    yield put(clearCart())
}


export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}


export function* cartSagas() {
    yield (all([call(onSignOutSuccess)]))
}