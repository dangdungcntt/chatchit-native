import React, { Component } from 'react';
import { Image } from 'react-native';
import iconLogo from '../images/logo.png';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image source={iconLogo} 
          style={{
            width: this.props.width,
            height: this.props.height
          }}
      />
    );
  }
} 