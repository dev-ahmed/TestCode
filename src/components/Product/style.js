import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image: {
    height: 120,
    width: 120,
    marginLeft: 0,
  },
  productDesc: {
    marginLeft: 15,
  },
  name: {
    fontWeight: '400',
    marginBottom: 15,
  },
  price: {
    fontWeight: 'bold',
  },
});
