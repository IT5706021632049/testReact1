

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import DetailsScreen from './component/DetailsScreen';
import page1 from './component/page1';
import page2 from './component/page2';
import page3 from './component/page3';
import page4 from './component/page4';
import page5 from './component/page5';
import page6 from './component/page6';
import page7 from './component/page7';
export default class App extends React.Component{
  render() {
    return (
        <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailsScreen,
  p1: page1,
  p2: page2,
  p3: page3,
  p4: page4,
  p5: page5,
  p6: page6,
  p7: page7
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
