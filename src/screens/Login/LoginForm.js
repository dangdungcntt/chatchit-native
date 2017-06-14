import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { login, panelRegister } from '../../store/actions/loginActions';
import style from './style';

class LoginForm extends Component {
  render() {
    const { 
      container, input, button,
      buttonLogin, loginText,
      buttonRegister, registerText
    } = style;
    return (
      <View
          style={container}
      >
        <TextInput 
            underlineColorAndroid='transparent'
            placeholder='Username'
            autoCapitalize='none'
            autoCorrect={false}
            style={input} 
        />
        <TextInput 
            underlineColorAndroid='transparent'
            placeholder='Password'
            secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            style={input} 
        />
        <View style={button}>
          <TouchableOpacity 
              style={buttonLogin}
              onPress={() => this.props.login()}
          >
            <Text style={loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={buttonRegister}
              onPress={() => this.props.panelRegister()}    
          >
            <Text style={registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    loginReducer: state.loginReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: () => dispatch(login()),
    panelRegister: () => dispatch(panelRegister())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);