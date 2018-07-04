

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { AppRegistry, Image } from 'react-native';
let num = 50
class HomeScreen extends Component{
static navigationOptions = { header: null}
constructor(props) {
    super(props);
    this.state = { text: '',text2: '' };
  };
  render() {
    let name = "Thanaphas Laohasinnuruk";
    let sum = Number.parseInt(this.state.text, 10) + Number.parseInt(this.state.text2, 10)
    var id = 57060216;
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
    
      return (
      <View style={styles.welcome}>
        <Text>HomeScreen naJA</Text>
        <Text>{name}</Text>
        <Text>{id}</Text>
        <TextInput style={{height: 60}}  placeholder="Input Num1" onChangeText={(text) => this.setState({text})} />
        <Text>{this.state.text}</Text>
        <TextInput style={{height: 60}}  placeholder="Input Num2" onChangeText={(text2) => this.setState({text2})}/>
        <Text>{this.state.text2}</Text>
        <Text>{sum}</Text>
        <Image source={pic} style={{width: 400, height: 110}}/>
        <Text title=" "/>
        <Text title=" "/>
        <Text title=" "/>
        <Button title="GO tooo Detail" onPress={() => this.props.navigation.navigate('Detail')} style={{width: 100, height: 10}}></Button>
        <Button title="Page 1 !!!!!" onPress={() => this.props.navigation.navigate('p1')}></Button>
        <Button title="Page 2 !!!!!" onPress={() => this.props.navigation.navigate('p2')}></Button>
        <Button title="Page 3 !!!!!" onPress={() => this.props.navigation.navigate('p3')}></Button>
        <Button title="Page 4 !!!!!" onPress={() => this.props.navigation.navigate('p4')}></Button>
        <Button title="Page 5 !!!!!" onPress={() => this.props.navigation.navigate('p5')}></Button>
        <Button title="Page 6 !!!!!" onPress={() => this.props.navigation.navigate('p6')}></Button>
        <Button title="Page 7 !!!!!" onPress={() => this.props.navigation.navigate('p7')}></Button>
      </View>
    );
  }
}
export default HomeScreen;
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
export {num}
AppRegistry.registerComponent('AwesomeProject', () => Bananas);