import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { MAIN_COLOR, baseStyle } from '../../baseStyle';


export default class Profile extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={baseStyle.container}>
        <Text style={style.noti}>Coming soon</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  noti: {
    fontSize: 30,
    fontWeight: '900',
    color: MAIN_COLOR
  }
});