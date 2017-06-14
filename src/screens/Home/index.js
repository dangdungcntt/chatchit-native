import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  Image, FlatList
} from 'react-native';
import RoomItem from '../ListRoom/RoomItem';
import DefaultRoomImage from '../../images/default_room_image.jpg';
import NewsIcon from '../../images/icon_news_red_20.png';
import DefaultNewImage from '../../images/default_news_image.png';

import style from './style';
// import { NavigationActions } from 'react-navigation';

export default class ListRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataListRoom: [
        { 
          roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '1',
          key: '1'
        },
        { 
          roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '2',
          key: '2'
        }
      ],
      dataNews: [
        {
          title: 'Update v.1.1.2 for web (06/11/2017)',
          link: 'https://facebook.com/DangDungCNTT/',
          key: '1'
        },
        {
          title: 'Update v.1.1.1 for web (05/23/2017)',
          link: 'https://facebook.com/DangDungCNTT/',
          key: '2'
        },
        {
          title: 'Update v.1.1.0 for web (05/18/2017)',
          link: 'https://facebook.com/DangDungCNTT/',
          key: '3'
        }
      ]
    }
  }

  _renderItem = ({item, index}) => (
    <RoomItem
        key={item.roomId}
        id={item.roomId}
        name={item.roomName}
        source={{uri: item.roomImage}}
    />
  );

  render() {
    const { 
      container, newsContainer, newsTitle, newsTitleText, 
      newContent, newContentTitle, listNews,
      listRoomContainer, topRoomTitle, listRooms
    } = style;
    return (
      <View style={container}>
        <View style={newsContainer}>
          <View style={newsTitle}>
            <Text style={newsTitleText}>News</Text>
            <Image source={NewsIcon} />
          </View>
          <FlatList
              style={listNews}
              ListEmptyComponent={<Text>Cannot display news</Text>}
              data={this.state.dataNews}
              renderItem={({item, index}) => (
                <View style={newContent}>
                  <Image source={DefaultNewImage} />
                  <Text style={newContentTitle}>{item.title}</Text>
                </View>
              )}
          />
        </View>
        <View style={listRoomContainer}>
          <Text style={topRoomTitle}>Top room</Text>
          <FlatList
              style={listRooms}
              initialNumToRender={4}
              ListEmptyComponent={<Text>Room Online</Text>}
              data={this.state.dataListRoom}
              renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}