import { StyleSheet } from 'react-native';

import { MAIN_COLOR, GRAY_COLOR } from '../../baseStyle';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  },
  newsContainer: {
    margin: 10,
    padding: 10,
    paddingBottom: 5,
    backgroundColor: 'white',
    height: 160
  },
  newsTitle: {
    flexDirection: 'row',
    paddingBottom: 8
  },
  newsTitleText: {
    backgroundColor: 'white',
    color: MAIN_COLOR,
    fontSize: 16,
    fontWeight: '500'
  },
  newContent: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: GRAY_COLOR,
  },
  newContentTitle: {
    marginLeft: 5,
    color: MAIN_COLOR,
    fontStyle: 'italic',
  },
  listNews: {
  },
  listRoomContainer: {
    flex: 1
  },
  topRoomTitle: {
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color: MAIN_COLOR,
    fontSize: 16,
    fontWeight: '500'
  },
  listRooms: {
    padding: 5,
    paddingTop: 0
  }
});