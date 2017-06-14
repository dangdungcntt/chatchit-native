import React, { Component } from 'react';
import {
  StackNavigator
} from 'react-navigation';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';

import { SideMenu } from './Router';
import Login from './screens/Login';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 400,
      delay: 0
    });
  }
  render() {
    const { logined } = this.props.loginReducer;
    if (logined) {
      return <SideMenu />;
    }
    return <Login />;
  }
}

function mapStateToProps (state) {
  return {
    loginReducer: state.loginReducer
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     login: () => dispatch(login())
//   }
// }

export default connect(
  mapStateToProps
)(App);