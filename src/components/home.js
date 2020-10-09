import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

class Home extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      // <View>
      //   <View style={styles.button}>
      //     <Text> textInComponent </Text>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#686cc3',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
// const styles = StyleSheet.create({
//   button: {
//     position: "absolute",
//     width: 60,
//     height: 60,
//     // borderRadius: 60 / 2,
//     justifyContent: "center",
//     shadowRadius: 10,
//     shadowColor: "#f02a4b",
//     shadowOpacity: 0.3,
//     // shadowOffset: { height: 10 },
//   },
// });

export default Home;

// =============================
// import React, { Component } from "react";
// import { Text, View } from "react-native";
// import FloatingButton from "./floatingbutton";

// class Home extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={require("./assets/add-button.png")}
//           resizeMode="cover"
//           style={{ width: 500, height: 900, opacity: 0.5 }}
//         />
//         <FloatingButton style={{ bottom: 100 }} />
//         <Text> Home </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
// });

// export default Home;
