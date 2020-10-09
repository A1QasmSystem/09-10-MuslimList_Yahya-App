import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

class Reset extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.insta}> Reset Password</Text>
        <Text style={styles.please}>
          Please enter your email below to receive your password reset
          instructions.
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.TextInput2}
          maxLength={40}
        />
        <View style={styles.forgot}>
          <TouchableOpacity
            onPress={() => {
              alert('Ganti bahasa');
            }}>
            <Text style={styles.email}> Send Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  insta: {
    marginBottom: 30,
    marginTop: 100,
    left: 24,
    color: '#20232a',
    // textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  TextInput2: {
    margin: 10,
    marginHorizontal: 30,
    marginTop: 50,
    backgroundColor: '#fff',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
    // opacity: 0.5,
    color: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 6,
  },
  please: {
    // textAlign: 'center',
    width: 327,
    height: 44,
    // top: 138,
    left: 24,
    // marginBottom: 50,
    // marginRight: 30,
    // marginLeft: 30,
    // marginTop: 10,
    color: '#B0B0B0',
    // textAlign: 'center',
    fontSize: 15,
    // textAlign: 'center',
  },
  email: {
    margin: 10,
    marginHorizontal: 30,
    marginTop: 50,
    backgroundColor: '#fff',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    // opacity: 0.5,
    color: '#FFFFFF',
    borderWidth: 1,
    // backgroundColor: '#384DFE',
    height: 48,
    // borderColor: 'blue',
    borderRadius: 6,
  },
});

export default Reset;
