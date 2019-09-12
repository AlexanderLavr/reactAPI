import { put, takeEvery, call, all, race, delay} from "redux-saga/effects";
import { request, requestID } from './request';
import { AdminProc } from './actions';
import { AdminBooksProc } from '../../redux/admin/adminBooks/actions';
    


export function* doAdmin(): IterableIterator<any>{
    yield takeEvery(AdminProc.DO_ADMIN, function*(){
        // get default array users
        let defaultArray = yield call(request, 'http://localhost:3000/v1/users', 'GET')
        if(defaultArray.success){
            let data:[] = defaultArray.data
            yield put({type: AdminProc.ADMIN_ARRAY, data})
        }
        // get default array books
        let defaultArrayBooks = yield call(request, 'http://localhost:3000/v1/books', 'GET')
        if(defaultArrayBooks.success){
            let data:[] = defaultArrayBooks.data
            yield put({type: AdminBooksProc.APDATE_ARRAY_BOOKS, data})
        }
    })

    yield takeEvery(AdminProc.DO_DELETE_USER, function*(id:any){//delete users
        let dataUser:any = id.id;
        let deleteUser = yield call(request, `http://localhost:3000/v1/users/deleteUser/${dataUser}`, 'DELETE');
        if(deleteUser.success){
            let defaultArray = yield call(request, 'http://localhost:3000/v1/users', 'GET')
            let data:[] = defaultArray.data
            yield put({type: AdminProc.ADMIN_ARRAY, data})
        }else{
            alert('Error on the server, try again later!')
        }
  
    })

    yield takeEvery(AdminProc.DO_EDIT_USER, function*(id:any){//edit user
        let editUserId:any = id.id;
        let response = yield call(requestID, 'GET', editUserId) 
        if(response.success){
            let data = response.data;
            yield put({type: AdminProc.EDIT_USER_SERVER,  data})
        }else{
            alert('Error on the server, try again later!')
        }
    })

    yield takeEvery(AdminProc.DO_SAVE_EDIT_USER, function*(data:any){//edit users in modal
        let editUserBody:{} = data.data;
        let response = yield call(request, 'http://localhost:3000/v1/users/editUser', 'PUT', editUserBody)
        
        if(response.success){
            let defaultArray = yield call(request, 'http://localhost:3000/v1/users', 'GET')
            let updateUserArray:[] = defaultArray.data
            let newEditUser = response.data;
            yield put({type: AdminProc.UPDATE_USER, updateUserArray, newEditUser})
        }else{
            alert('Error on the server, try again later!')
        } 
    })
}