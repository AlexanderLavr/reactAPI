import { put, takeEvery, call, all, race, delay} from 'redux-saga/effects';
import { getMatch, matchIs, countTotalBooks } from '../../actionsComponents/actUserHome';
import { UserProc } from './actions';
import { request } from '../../help/request';

export function* doUser():IterableIterator<any>{
    yield takeEvery(UserProc.DO_USER, function*(){//start array books
        //------------------------------defoult count books in cart
        let selectBooksArr:any = JSON.parse(localStorage.getItem("selectBoock") || "[]");
        let countBooksInCart:number = countTotalBooks(selectBooksArr);
        yield put({type: UserProc.START_ADD_BOOK_TO_CART, countBooksInCart})
        //------------------------------defoult count books in cart
        let defaultArrayBooks = yield call(request, 'http://localhost:3000/v1/books', 'GET')
        let dataBooks:[] = defaultArrayBooks.data
        yield put({type: UserProc.ARRAY_BOOKS, dataBooks})//default array books in page uder
    })

    yield takeEvery(UserProc.SELECT_BOOK, function*(id:any){// select book for watch more details
        let idSelBook = id.id;
        let choosedBook = yield call(request, `http://localhost:3000/v1/books/takeEditBook/${idSelBook}`, 'GET');
        if(choosedBook.success){
            let selectBook = choosedBook.data; 
            yield put({type: UserProc.CHOOSED_BOOK, selectBook})
        }
    })

    yield takeEvery(UserProc.ADD_BOOK, function*(id:any){//add books to cart in page USER
        let idAddBook:string = id.id;
        let selectBooksArr = JSON.parse(localStorage.getItem("selectBoock") || "[]"); 
        if(!getMatch(selectBooksArr, idAddBook)){//check in match books
            let choosedBook = yield call(request, `http://localhost:3000/v1/books/takeEditBook/${idAddBook}`, 'GET');
            let data = choosedBook.data;
            data.totalCount = 1;//add new state to book object
            selectBooksArr.push(data)//if not match=> add to array books
            localStorage.setItem('selectBoock', JSON.stringify(selectBooksArr))
            yield put({type: UserProc.ADD_BOOK_TO_CART})//++number in img cart
        }else{
            matchIs(selectBooksArr, idAddBook)//if isMatch => totalcount++
            yield put({type: UserProc.ADD_BOOK_TO_CART})
        } 
    })
}