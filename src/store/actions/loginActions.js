import {
  LOGGING, LOGOUT, REGISTER, PANEL_LOGIN, PANEL_REGISTER
} from '../constants';
import { getLogin } from '../../api/login';

export function panelLogin() {
  return {
    type: PANEL_LOGIN
  }
}

export function panelRegister() {
  return {
    type: PANEL_REGISTER
  }
}

export function login() {
  return {
    type: LOGGING,
    payload: getLogin()
  }
};

export function logout() {
  return {
    type: LOGOUT
  };
};

export function register() {
  return {
    type: REGISTER
  };
}