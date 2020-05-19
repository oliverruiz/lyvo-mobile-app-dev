import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  onRegister() {   
    this.props.navigation.navigate(
        'Register'
      );
  }
  onLogin() {
    if (this.state.email == '' && this.state.password == '') {
      Alert.alert('Submit Error:', 'Empty Fields');
      return;
    } else {
      // Check if email and password are correct!
      fetch('https://us-central1-lyvo-4c9fa.cloudfunctions.net/app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }).then((res) => {
        if (res.status == 200) {
          this.setState({email: '', password: ''});
          this.props.navigation.navigate('Main');
        } else {
          Alert.alert('Invalid username or email');
        }
      }).catch((error) => {
        console.log("ERROR");
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.input} onPress={this.onLogin}>
          <Text> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={this.onRegister}>
          <Text> Register </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
