import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'rgb(255,255,255)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 3,
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  headerText: {
    fontSize: 25,
    color: 'black',
  },
});
