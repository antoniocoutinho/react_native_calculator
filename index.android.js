import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Calculator from './src/components/Calculator';

export default class react_native_calculator extends Component {
  render() {
    return (
      
        <Calculator/>      
    );
  }
}


AppRegistry.registerComponent('react_native_calculator', () => react_native_calculator);
