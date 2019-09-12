import { connect } from 'react-redux';
import { AdminModal } from '../components/admin/adminUsers/modalUsers';
import { AdminProc } from '../redux/admin/actions';

const mapStateToProps = (state: any) => ({
    serverArray: state.admin.serverArray,
    openAdminModal: state.admin.openAdminModal,
    editUserServer: state.admin.editUserServer
  });
  
  export default connect(
    mapStateToProps,
    dispatch=>({
        closeModal: ()=>{
            dispatch({type: AdminProc.CLOSE_MODAL})
        },
        saveEditUser: (data:any)=>{
          dispatch({type: AdminProc.DO_SAVE_EDIT_USER, data})
        }
    })
  )(AdminModal);