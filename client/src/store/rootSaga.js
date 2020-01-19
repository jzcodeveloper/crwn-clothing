import { all, fork } from "redux-saga/effects";

import shopSaga from "./shop/shopSagas";
import userSaga from "./user/userSagas";

export default function* rootSaga() {
  yield all([fork(shopSaga), fork(userSaga)]);
}
