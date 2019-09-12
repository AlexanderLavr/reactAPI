import { RegistrationinitialState, RPr } from './actions';
import { HeaderProc } from '../header/actions';

export const initialState:RegistrationinitialState = {
  firstname: '',
  secondname: '',
  email: '',
  password: '',

  errorFirstname: '',
  errorSecondname: '',
  errorEmail: '',
  errorPassword: '',
  
  startRegister: false,
  userExist: false,
  successRegister: false,
  error: '',
  imageProfile: ''
};



export function regestrationReduser(state:RegistrationinitialState = initialState, action:any){
  switch (action.type){
     case RPr.DO_REGISTER:
        return {
        ...state, 
        startRegister: true
      }
      case RPr.ADD_USER: 
        let obj = action.obj;
        return {
          ...state,  
          firstname: obj.obj.firstname,
          secondname: obj.obj.secondname,
          email: obj.obj.email,
          password: obj.obj.password,
          imageProfile: obj.obj.imageProfile,

          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: '',
        }
      case RPr.USER_EXSIST:
        return {
          ...state, 
          error: action.error,
          successRegister: false,
          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: ''
      }
      case RPr.SUCCESS_REGISTRATION:
        return {
          ...state, 
          successRegister: true,
          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: '',
          error: ''
      }
      case RPr.ERROR_VALIDE_REGISTRATION:
        return {
          ...state,
          firstname: '',
          secondname: '',
          email: '',
          password: '',
          error: '',

          errorFirstname: action.error.errorFirstname,
          errorSecondname: action.error.errorSecondname,
          errorEmail: action.error.errorEmail,
          errorPassword: action.error.errorPassword
      }
      case HeaderProc.LOG_OUT:
          return {
            ...state, 
            email: '',
            password: '',
            error: ''
          }
      default:
        return state;
    }
} 