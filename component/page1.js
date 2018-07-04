

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class page1 extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.tFont}>Page1</Text>
      <Button title="BACK To HOME" onPress={() => this.props.navigation.navigate('Home')}></Button>
    </View>
    );
  }
}
export default page1;
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
