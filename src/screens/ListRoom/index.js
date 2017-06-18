import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  Image, FlatList
} from 'react-native';
import RoomItem from '../../components/RoomItem';
import DefaultRoomImage from '../../images/default_room_image.jpg';
// import { NavigationActions } from 'react-navigation';

export default class ListRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '1',
          key: '1'
        },
        { roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '2',
          key: '2'
        },
        { roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '3',
          key: '3'
        },
        { roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '4',
          key: '4'
        },
        { roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '5',
          key: '5'
        },
        { roomImage: 'default_room_image.jpg',
          roomName: 'Room name',
          roomId: '6',
          key: '6'
        }
      ],
      refreshing: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [...this.state.data, 
          {
            roomImage: 'https://chatchit.ga/images/default_room_image.jpg',
            roomName: 'Room name',
            roomId: '7',
            key: '7'
          }
        ]
      });
    }, 3000);
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    });
    setTimeout(() => {
      this.setState({
        refreshing: false
      });
    }, 3000);
  }

  _renderItem = ({item, index}) => (
    <RoomItem
        key={item.roomId}
        id={item.roomId}
        name={item.roomName}
        source={{uri: item.roomImage}}
        numCols={2}
    />
  );

  render() {
    const { container, listRoom } = style;
    return (
      <View style={container}>
        <FlatList
            style={listRoom}
            numColumns={2}
            initialNumToRender={4}
            refreshing={this.state.refreshing}
            onRefresh={() => this.onRefresh()}  
            ListEmptyComponent={<Text>No Room</Text>}
            //{/*onRefresh={true}*/}
            data={this.state.data}
            renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  listRoom: {
    paddingHorizontal: 5
  }
});