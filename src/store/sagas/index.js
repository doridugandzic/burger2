import {takeEvery} from "redux-saga/effects"
import {logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStatesaga} from "./auth";
import * as actionTypes from "../actions/actionTypes";
import {initIngredientsSaga} from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./order";

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStatesaga)
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
  }

export function* watchOrder(){
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}

