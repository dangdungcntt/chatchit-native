import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity,
  StyleSheet, Dimensions
} from 'react-native';
import DefaultRoomImage from '../../images/default_room_image.jpg';
import IconUserOnline from '../../images/icon_user_online.png';

const { width, height } = Dimensions.get('window');

export default class RoomItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { container,
      roomItem, wrapperImage, roomImage,
      wrapperInfo, roomName, roomId,
      wrapperOnline, numberOnline
    } = style;
    const Img = 
      this.props.source.uri.indexOf('default') > -1 
      ? DefaultRoomImage : this.props.source ;
    return (
      <View style={container}>
        <TouchableOpacity style={roomItem}>
          <View style={wrapperImage}>
            <Image source={Img} style={roomImage} />
          </View>
          <View style={wrapperInfo}>
            <View>
              <Text style={roomName}>{this.props.name}</Text>
              <Text style={roomId}>Room {this.props.id}</Text>
            </View>
            <View style={wrapperOnline}>
              <Image source={IconUserOnline} />
              <Text style={numberOnline}>100</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // width: (width - 30) / 2,
    flex: 1,
    marginHorizontal: 5
  },
  roomItem: {
    backgroundColor: 'white',
    marginBottom: 10
    
  },
  wrapperImage: {
    padding: 10,
    alignItems: 'center',
    marginBottom: 3
  },
  roomImage: {
    height: height / 4,
    width: height / 36 * 16
  },
  wrapperInfo: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  roomName: {
    fontWeight: '600'
  },
  roomId: {
    fontStyle: 'italic'
  },
  wrapperOnline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberOnline: {
    color: '#e74c3c'
  }
});