import { 
  LOGGING_PENDING, LOGGING_FULFILLED, LOGGING_REJECTED,
  LOGOUT, PANEL_LOGIN, PANEL_REGISTER,
  REGISTER_PENDING, REGISTER_FULFILLED, REGISTER_REJECTED
} from '../store/constants';

const initialState = {
  user: {fbid: ''},
  logined: false,
  isLogging: false,
  panelLogin: true,
  isRegistering: false,
  error: false,
  message: ''
}

export default function loginReducer (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case PANEL_LOGIN:
      return { ...state, panelLogin: true }
    case PANEL_REGISTER:
      return { ...state, panelLogin: false }
    case LOGGING_PENDING:
      return { ...state, user: [], isLogging: true };
    case LOGGING_FULFILLED:
      return { ...state, isLogging: false, logined: true, user: action.payload }
    case LOGGING_REJECTED:
      return { ...state, isLogging: false, error: true, message: action.payload }
    case LOGOUT :
      return { ...state, logined: false, user: [] }
    case REGISTER_PENDING:
      return { ...state, isRegistering: true };
    case REGISTER_FULFILLED:
      return { ...state, isRegistering: false, panelLogin: true, user: action.payload }
    case REGISTER_REJECTED:
      return { ...state, isRegistering: false, error: true, message: action.payload }
    default:
      return state;
  }
}