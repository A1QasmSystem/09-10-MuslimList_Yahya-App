// import React from 'react';
// import Splash from './src/components/splash';
// class App extends React.Component {
//   render() {
//     return <Splash />;
//   }
// }

// export default App;
// ===================
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Login from './src/components/login';
import Register from './src/components/register';
import Reset from './src/components/reset';
import Intro from './src/components/intro';

export default class App extends Component {
  render() {
    return <Login />;
    // return <Reset />;
    // return <Register />;
    // return <Intro />;
  }
}

const styles = StyleSheet.create({});
