import { AdminHome } from '../components/admin/adminHome';
import { connect } from 'react-redux';
import { AdminProc } from '../redux/admin/actions';


const mapStateToProps = (state: any):{} => ({
    loginSuc: state.login.loginSuccess,
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    userIsAdmin: state.login.userIsAdmin,
    imageProfile: state.login.imageProfile,
    serverArray: state.admin.serverArray,
    openAdminModal: state.admin.openAdminModal,
    editUserServer: state.admin.editUserServer
});

export default connect(
    mapStateToProps,
    dispatch=>({
        queryServer: ()=>{
            dispatch({type: AdminProc.DO_ADMIN})
        }
    })
)(AdminHome);