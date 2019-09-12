import { connect } from 'react-redux';
import { Profile } from '../components/profile';
import { HeaderProc } from '../redux/header/actions';



export const mapStateToProps = (state: any):{} => ({
    email: state.login.email,
    password: state.password,
    imageProfile: state.login.imageProfile,
    idUser: state.login.idUser
});


export default connect(
    mapStateToProps,
    dispatch=>({
        saveImgProfile: (saveImg:{})=>{
            dispatch({type: HeaderProc.DO_SAVE_PHOTO, saveImg})
        }
    })
)(Profile);