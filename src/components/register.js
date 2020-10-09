import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

class Register extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.insta}> Registration</Text>
        <View style={styles.loginstyle}>
          <Text style={styles.already}> Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              alert('Ganti bahasa');
            }}>
            <Text style={styles.logins}> Log in</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.email}> Email </Text>
        <TextInput
          placeholder="Email"
          style={styles.TextInput2}
          maxLength={40}
        />
        <View style={styles.mobile}>
          <TextInput
            placeholder="Password"
            style={styles.number}
            maxLength={40}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Password"
            style={styles.mobile}
            maxLength={40}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.pass}> Password </Text>
        <TextInput
          placeholder="Password"
          style={styles.TextInput2}
          maxLength={40}
          secureTextEntry={true}
        />
        <View style={styles.login}>
          <Button title="Sign Up" onPress={() => alert('Password salah')} />
        </View>
        <View style={styles.forgot}>
          <Text style={styles.forgot}> Log in with social account </Text>
        </View>
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
        <Text style={styles.click}>
          By clicking sign up you are agreeing to the Term of use and the
          Privacy policy
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  insta: {
    marginBottom: 20,
    marginTop: 60,
    left: 24,
    color: '#20232a',
    // textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  already: {
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
    fontSize: 15,
    // textAlign: 'center',
  },
  logins: {
    // marginTop: 60,
    // color: 'blue',
    // textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    // alignSelf: 'center',
    // marginBottom: 30,
    // marginTop: 100,
    left: 24,
    color: 'blue',
    // textAlign: 'center',
    // fontSize: 30,
    fontWeight: 'bold',
  },
  loginstyle: {
    // marginTop: 60,
    // color: 'blue',
    // textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    // alignSelf: 'center',
    // marginBottom: 30,
    // marginTop: 100,
    // left: 20,
    color: 'blue',
    // textAlign: 'center',
    // fontSize: 30,
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
    fontSize: 15,
    // textAlign: 'center',
  },
  mobile: {
    // marginTop: 60,
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
    // padding: 10,
    left: 24,
    // backgroundColor: 'grey',
  },
  number: {
    // marginTop: 60,

    // marginBottom: 30,
    // marginTop: 100,
    // left: 24,
    color: '#20232a',
    // textAlign: 'center',
    // fontSize: 30,
    fontWeight: 'bold',
    // color: '#20232a',
    // textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // padding: 10,
  },
  pass: {
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
    fontSize: 15,
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
    borderRadius: 6,
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
    // fontWeight: 'bold',
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
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sign: {
    marginTop: 60,
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dont: {
    // marginTop: 60,
    marginBottom: 30,
    // marginTop: 100,
    left: 24,
    color: '#20232a',
    // textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    // color: '#20232a',
    // textAlign: 'center',
    // fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    // alignSelf: 'center',
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
  click: {
    // textAlign: 'center',
    width: 327,
    height: 40,
    top: 10,
    left: 24,
    // marginBottom: 50,
    // marginRight: 30,
    // marginLeft: 30,
    // marginTop: 10,
    color: '#20232a',
    // textAlign: 'center',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default Register;
