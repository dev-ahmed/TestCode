'use strict';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { styles } from './style';

class CustomActivityIndicator extends React.Component {
  render() {
    return !this.props.loaded ? <ActivityIndicator style={styles.container} /> : null;
  }
}

export default CustomActivityIndicator;
