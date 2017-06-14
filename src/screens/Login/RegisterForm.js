import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { register, panelLogin } from '../../store/actions/loginActions';
import style from './style';



class RegisterForm extends Component {
  render() {
    const { 
      container, input, button,
      buttonLogin, loginText,
      buttonRegister, registerText
    } = style;
    const styles = ['CircleFlip'];
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
        <TextInput 
            underlineColorAndroid='transparent'
            placeholder='Confirm Password'
            secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            style={input} 
        />
        <View style={button}>
          <TouchableOpacity style={buttonLogin}>
            <Text style={loginText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={buttonRegister}
              onPress={() => this.props.panelLogin()}
          >
            <Text style={registerText}>Login</Text>
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
    register: () => dispatch(register()),
    panelLogin: () => dispatch(panelLogin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);