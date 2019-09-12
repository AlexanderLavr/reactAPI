import { connect } from 'react-redux';
import { AdminModalBooks } from '../components/admin/adminBooks/modalBooks';
import { AdminBooksProc } from '../redux/admin/adminBooks/actions';

const mapStateToProps = (state: any):{} => ({  
    openAdminModalBooks: state.adminBooks.openAdminModalBooks,
    labelOfModal: state.adminBooks.labelOfModal,
    title: state.adminBooks.title,
    price: state.adminBooks.price,
    description: state.adminBooks.description,
    amount: state.adminBooks.amount,
    choosePhoto: state.adminBooks.choosePhoto,
    idBooks: state.adminBooks.idBooks
  });
  
export default connect(
    mapStateToProps,
    dispatch=>({
        closeModalAddBooks: ()=>{
            dispatch({type: AdminBooksProc.CLOSE_MODAL_ADD_BOOKS})
        },
        saveNewBook: (boockState:{})=>{
            dispatch({type: AdminBooksProc.DO_SAVE_BOOK, boockState})
        },
        editBook: (boockState:{}, id:string)=>{
            dispatch({type: AdminBooksProc.DO_SAVE_EDIT_BOOK, boockState, id})
        }
    })
  )(AdminModalBooks);

