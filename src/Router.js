import React, { Component } from 'react';
import { 
  Text, StyleSheet, View, TouchableOpacity
} from 'react-native';
import {
  StackNavigator, DrawerNavigator, TabNavigator, DrawerItems
} from 'react-navigation';
import ButtonMenu from './components/ButtonMenu';
import Menu from './screens/Menu';
import Home from './screens/Home';
import ListRoom from './screens/ListRoom';
import Profile from './screens/Profile';

import { MAIN_COLOR } from './baseStyle';

export const HomeStack = StackNavigator({

  ScreenHome: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>Home</Text>
    })
  },
  ScreenListRoom: {
    screen: ListRoom,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>List room</Text>
    })
  },
  ScreenProfile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>{navigation.state.params.user.name}</Text>
    })
  }
});


export const SideMenu = DrawerNavigator(
  {
    screen: {
      screen: HomeStack
    }
  }, 
  {
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);

const style = StyleSheet.create({
  headerHomeText: {
    color: MAIN_COLOR
  }
});