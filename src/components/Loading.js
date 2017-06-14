import React, { Component } from 'react';
import Spinner from 'react-native-spinkit';

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Spinner type="Circle" size={this.props.size} isVisible={true} color='#3498db'/>
    );
  }
} 