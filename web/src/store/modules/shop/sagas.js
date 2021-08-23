import { takeLatest, all, call, put } from 'redux-saga/effects'
import types from './types'
import api from '../../../services/api'
import { setShops, setShop } from './actions'

export function* requestShops(){
    // api.get('/shops')
    const response = yield call(api.get, '/shops');
    const res = response.data;
    yield put(setShops(res.shops))
}

export function* requestShop(payload){
    // api.get('/shops')
    const response = yield call(api.get, `/shop/${payload.id}`);
    const res = response.data;
    yield put(setShop(res.shop))
}

export default all([
    takeLatest(types.REQUEST_SHOPS, requestShops),
    takeLatest(types.REQUEST_SHOP, requestShop)
])