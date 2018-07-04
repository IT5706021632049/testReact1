

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {num} from './HomeScreen';

class DetailsScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Text>Detail   {num} </Text>
      <Button title="GO tooo Detail" onPress={() => this.props.navigation.navigate('Home')}></Button>
    </View>
    );
  }
}
export default DetailsScreen;
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
