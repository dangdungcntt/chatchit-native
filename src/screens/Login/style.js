import { StyleSheet } from 'react-native';
import { MAIN_COLOR, MAIN_BG_COLOR } from '../../baseStyle';

export default style = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'space-around'
  },
  input: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    margin: 1,
    height: 40,
    backgroundColor: MAIN_BG_COLOR,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    flexDirection: 'row'
  },
  buttonLogin: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    paddingVertical: 10,
    backgroundColor: MAIN_COLOR,
    flex: 1,
    marginRight: 3
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500'
  },
  buttonRegister: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    paddingVertical: 10,
    flex: 1,
    marginLeft: 3
  },
  registerText: {
    textAlign: 'center',
    fontWeight: '500'
  }
});