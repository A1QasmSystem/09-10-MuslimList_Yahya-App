import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.insta}> Welcome back!</Text>
        <Text style={styles.email}> Email </Text>
        <TextInput
          placeholder="example@gmail.com"
          style={styles.TextInput2}
          maxLength={40}
        />
        <Text style={styles.email}> Password </Text>
        <TextInput
          placeholder="Password"
          style={styles.TextInput2}
          maxLength={40}
          secureTextEntry={true}
        />
        <View style={styles.login}>
          <Button title="Log in" onPress={() => alert('Password salah')} />
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity
            onPress={() => {
              alert('Ganti bahasa');
            }}>
            <Text style={styles.forgot}> Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.fblogin}> Log in with social account</Text>
        <View style={styles.fb}>
          <TouchableOpacity
            onPress={() => {
              alert('Ganti bahasa');
            }}>
            <Text style={styles.facebook}> Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Ganti bahasa');
            }}>
            <Text style={styles.google}> Google </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sign}>
          <Text style={styles.dont}> Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              alert('Ganti bahasa');
            }}>
            <Text style={styles.sign}> Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  insta: {
    marginBottom: 30,
    marginTop: 70,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    // textAlign: 'center',
    // width: 100,
    height: 44,
    // top: 138,
    left: 24,
    // marginBottom: 50,
    // marginRight: 30,
    // marginLeft: 30,
    // marginTop: 10,
    color: '#20232a',
    // textAlign: 'center',
    fontSize: 14,
    // textAlign: 'center',
  },
  TextInput2: {
    margin: 10,
    marginHorizontal: 30,
    marginTop: 1,
    backgroundColor: '#f1f3f8',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
    opacity: 0.5,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },
  login: {
    width: 300,
    height: 40,
    marginHorizontal: 30,
    // opacity: 0.3,
    // margin: 10,
    // marginHorizontal: 30,
    marginTop: 1,
    // backgroundColor: '#f1f3f8',
    borderBottomColor: '#000000',
    // borderBottomWidth: 1,
    padding: 5,
    // opacity: 0.5,
  },
  forgot: {
    // marginBottom: 30,
    marginTop: 10,
    color: '#B0B0B0',
    // backgroundColor: 'red',
    // borderRadius: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  fblogin: {
    // shadowRadius: 5,
    // margin: 20,
    marginTop: 20,
    // paddingVertical: 8,
    // borderWidth: 7,
    // borderColor: '#20232a',
    // borderRadius: 20,
    // backgroundColor: '#61dafb',
    color: '#B0B0B0',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  sign: {
    marginTop: 30,
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dont: {
    marginTop: 30,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  fb: {
    // marginBottom: 30,
    marginTop: 5,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  facebook: {
    // marginBottom: 30,
    backgroundColor: '#36589E',
    marginTop: 20,
    marginRight: 50,
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 6,
    // borderRightWidth: 30,
    // borderTopWidth: 20,
    height: 48,
    width: 151,
    position: 'relative',
  },
  google: {
    // marginBottom: 30,
    position: 'relative',
    backgroundColor: '#EB4132',
    marginTop: 20,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 6,
    width: 151,
    height: 48,
  },
});

export default Login;
