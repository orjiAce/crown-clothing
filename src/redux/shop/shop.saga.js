import {takeEvery, call, all, put} from 'redux-saga/effects';

import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.uitils";
import {fetchCollectionFailure, fetchCollectionSuccess} from "./shop.action";


export function* fetchCollectionAsync() {


    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot)
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }

}

export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync)
}

export function* rootShopSaga() {
    yield (all([call(fetchCollectionStart)]))
}