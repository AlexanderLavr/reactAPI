import { connect } from 'react-redux';
import { UserHome } from '../components/user/userHome';
import { queryServer } from '../redux/user/actions';




export const getMatch = (selectBooksArr:any, id:string):boolean=>{// check on match
    let match:boolean = false;
    for(let element of selectBooksArr){
        if(id === element._id){
            return match = true;
        }
    }
    return match
}
export const matchIs = (selectBooksArr:any, id:string):void =>{// add ismatch
    for(let element of selectBooksArr){
        if(id === element._id){
            element.totalCount++
        }
    }
    localStorage.setItem('selectBoock', JSON.stringify(selectBooksArr))
}

export const countTotalBooks = (arr:any):number =>{
    let totalBooks:number = 0;
    for(let element of arr){
        totalBooks += element.totalCount
    }
    return totalBooks
}

export const countTotalPrice = (arr:any):number =>{
    let totalPrace:number = 0;
    for(let element of arr){
        totalPrace += (element.totalCount * parseInt(element.price))
    }
    return totalPrace
}

export const buttonDelete = (e:any, arr:any):void =>{
    let buttonDelete:HTMLButtonElement = e.target;
    let id:string = buttonDelete.id.substr(2, )
    for(let element of arr){
        if(id === element._id){
            let index = arr.indexOf(element);
            arr.splice(index, 1);
        }
    }
    localStorage.setItem('selectBoock', JSON.stringify(arr))
}
export const buttonAdd = (e:any, arr:any):void =>{
    let buttonAdd:HTMLButtonElement = e.target;
    let id:string = buttonAdd.id.substr(2, )
    for(let element of arr){
        if(id === element._id){
            if(element.totalCount === Number(element.amount)){
                localStorage.setItem('selectBoock', JSON.stringify(arr))
            }else{
                element.totalCount++
                localStorage.setItem('selectBoock', JSON.stringify(arr))
            }
        }
    }
} 

export const buttonMult = (e:any, arr:any):void =>{
    let buttonMult:HTMLButtonElement = e.target;
    let id:string = buttonMult.id.substr(2, )
    for(let element of arr){
        if(id === element._id){
            if(element.totalCount === 1){
                localStorage.setItem('selectBoock', JSON.stringify(arr))
            }else{
                element.totalCount--
                localStorage.setItem('selectBoock', JSON.stringify(arr))
            }
        }
    }
} 

export const getState = ():[] =>{
    localStorage.getItem(('selectBoock') || '[]')
    let selectBooksArr:[] = JSON.parse(localStorage.getItem('selectBoock') || '[]');
    return selectBooksArr
} 



const mapStateToProps = (state: any):{} => ({
    serverBooks: state.userBooks.serverBooks,
});
export default connect(
    mapStateToProps,
    { queryServer }
)(UserHome);