import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { logout } from '../../store/actions/loginActions';

import style from './style';
import IconHome from '../../images/icon_home_white_20.png';
import IconList from '../../images/icon_list_white_20.png';
import IconLogout from '../../images/icon_logout_white_20.png';
import DefaultAvatar from '../../images/default_avatar.jpg';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = { currentScreen: 'ScreenHome' };
  }

  clickMenuItem(item, user) {
    this.setState({ currentScreen: item });
    this.props.navigation.navigate(item, { user });
  }

  render() {
    const { 
      container, title, menuIcon, avatar,
      menuItem, menuItemActive, textMenu
    } = style;
    const { currentScreen } = this.state;
    const { fbid } = this.props.loginReducer.user
    const Avatar = 
      typeof fbid === 'undefined' || fbid.length === 0
      ? DefaultAvatar : {uri: this.props.loginReducer.user.fbid } ;
    return (
      <View style={container}>  
        <View>
          <Text style={title}>ChatChit</Text>
          <TouchableOpacity
              onPress={() => this.clickMenuItem('ScreenProfile', { name: 'Nguyen Dang Dung'})}
              style={currentScreen === 'ScreenProfile' ? menuItemActive : menuItem}
          >
            <Image style={avatar} source={Avatar} />
            <Text style={textMenu}>Nguyen Dang Dung</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => this.clickMenuItem('ScreenHome')}
              style={currentScreen === 'ScreenHome' ? menuItemActive : menuItem}
          >
            <Image style={menuIcon} source={IconHome} />
            <Text style={textMenu}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => this.clickMenuItem('ScreenListRoom')}
              style={currentScreen === 'ScreenListRoom' ? menuItemActive : menuItem}
          >
            <Image style={menuIcon} source={IconList} />
            <Text style={textMenu}>List room</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
              onPress={() => this.props.logout()}
              style={menuItem}
          >
            <Image style={menuIcon} source={IconLogout} />
            <Text style={textMenu}>Logout</Text>
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
    logout: () => dispatch(logout())
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Menu);