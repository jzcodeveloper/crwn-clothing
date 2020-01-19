import { all, fork } from "redux-saga/effects";

import shopSaga from "./shop/shopSagas";
import userSaga from "./user/userSagas";
import directorySaga from "./directory/directorySagas";

export default function* rootSaga() {
  yield all([fork(shopSaga), fork(userSaga), fork(directorySaga)]);
}
