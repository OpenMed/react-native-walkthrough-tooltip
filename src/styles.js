// @flow
import { StyleSheet } from 'react-native';

const styles: StyleSheet.Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
    backgroundColor: 'transparent',
  },
  containerVisible: {
    opacity: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  tooltip: {
    backgroundColor: 'transparent',
    position: 'absolute'
    //shadowColor: 'black',
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 2,
    //shadowOpacity: 0.8,
  },
  content: {
    borderRadius: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E6E8F0',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  arrow: {
    position: 'absolute',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});

export default styles;
