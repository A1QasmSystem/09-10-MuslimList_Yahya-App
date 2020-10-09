import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
// import Intro from './assets/people.png';

class Intro extends Component {
  render() {
    return (
      <View style={Styles.view1}>
        <Image style={Styles.orang} source={require('./assets/people.png')} />

        <Text style={Styles.text1}>Mari List Target Antum</Text>

        <Text style={Styles.text2}>
          Merapikan Target Antum dengan aplikasi Muslim List
        </Text>

        <TouchableOpacity
          style={Styles.get}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={Styles.textget}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  view1: {
    backgroundColor: '#2F4F4F',
    flex: 1,
    alignItems: 'center',
  },
  orang: {
    width: 300,
    height: 300,
    marginTop: 110,
  },
  text1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text2: {
    color: '#dedede',
  },
  get: {
    backgroundColor: '#FF685C',
    width: 223,
    height: 48,
    marginTop: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textget: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Intro;
