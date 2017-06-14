import { StyleSheet } from 'react-native';
import { MAIN_COLOR, ACTIVE_COLOR } from '../../baseStyle';

export default style = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    padding: 15,
    fontWeight : 'bold',
    fontSize: 20,
    color: 'white',
  },
  menuItem: {
    padding: 10,
    flexDirection:'row',
    alignItems: 'center'
  },
  menuItemActive: {
    padding: 10,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: ACTIVE_COLOR
  },
  avatar: {
    marginRight: 5,
    borderRadius: 20
  },
  menuIcon: {
    marginRight: 5,
  },
  textMenu: {
    fontWeight : '500',
    color: 'white'
  }
});