import { put, takeEvery, call} from "redux-saga/effects";
import { request } from './request';
import { HeaderProc } from '../header/actions';

export function* saveImage(): IterableIterator<any>{
    yield takeEvery(HeaderProc.DO_SAVE_PHOTO, function*(saveImg:any){
        let idUser:string = saveImg.saveImg.id;
        let imageProfile:any = saveImg.saveImg;
   
        let response = yield call(request, 'PUT', imageProfile, idUser)
        if(response.success){
            let saveImg:string = response.data.imageProfile
            yield put({type: HeaderProc.SAVE_PHOTO, saveImg})
            let localStoreObj:any = localStorage.getItem('user');
            localStoreObj = JSON.parse(localStoreObj)
            localStoreObj.imageProfile = saveImg;
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(localStoreObj))
        }
    })
}
 
   
