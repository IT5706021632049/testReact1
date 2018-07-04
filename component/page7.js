

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class page7 extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Text>Page7</Text>
      <Button title="BACK To HOME" onPress={() => this.props.navigation.navigate('Home')}></Button>
    </View>
    );
  }
}
export default page7;
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
