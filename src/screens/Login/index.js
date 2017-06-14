import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
  StyleSheet
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { login } from '../../store/actions/loginActions';
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { MAIN_COLOR, ACTIVE_COLOR, MAIN_BG_COLOR } from '../../baseStyle';

class Login extends Component {

  render() {
    const { container, logoContainer, title, formContainer } = style;
    const { panelLogin, isLogging, isRegistering } = this.props.loginReducer;
    const Img = isLogging || isRegistering ? 
                  <Loading size={100} /> : 
                  <Logo width={100} height={100} />;
    const titlePage = panelLogin ? 'Login' : 'Register';
    return (
      <KeyboardAwareScrollView style={container}>
        <View style={logoContainer}>
          {Img}
          <Text style={title}>{titlePage} to ChatChit</Text>
        </View>
        <View style={formContainer}>
          {panelLogin ? <LoginForm /> : <RegisterForm />}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BG_COLOR
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: MAIN_COLOR
  },
  formContainer: {

  }
});

function mapStateToProps (state) {
  return {
    loginReducer: state.loginReducer
  }
}

export default connect(
  mapStateToProps
)(Login);