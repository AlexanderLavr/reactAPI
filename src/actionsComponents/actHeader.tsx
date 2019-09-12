import { connect } from 'react-redux';
import { HeaderNav } from '../components/header';
import { HeaderProc } from '../redux/header/actions';

const mapStateToProps = (state: any):{} => ({
    loginSuc: state.login.loginSuccess,
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    userIsAdmin: state.login.userIsAdmin,
    imageProfile: state.login.imageProfile,
    countBook: state.userBooks.countBook
});


export default connect(
    mapStateToProps,
    dispatch=>({
        logOut: ()=>{
            dispatch({type: HeaderProc.LOG_OUT})
        },
        localStoreUser: (obj:any)=>{
            dispatch({type: HeaderProc.DO_HEADER, obj})
        }
    })
)(HeaderNav);