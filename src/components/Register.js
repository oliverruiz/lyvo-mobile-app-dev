import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      password: '',
      email: '',
    };
  }

  onSubmit() {
    if (this.state.email == '' || this.state.password == '') {
      Alert.alert('Submit Error:', 'Empty Fields');
      return;
    }


    fetch('https://us-central1-lyvo-4c9fa.cloudfunctions.net/app/auth/register', {
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
        this.props.navigation.navigate('Login');
        console.log('Successfully Registered');
        Alert.alert('Register', 'SUCCESS');
      } else {
        console.log('Email doesnt exist');
        Alert.alert('Submit Error:', 'Email has not applied for event. Please apply on ....');
      }
    }).catch((error) => {
      console.log("ERROR");
    });
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
        <TouchableOpacity style={styles.input} onPress={this.onSubmit}>
          <Text> Submit </Text>
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
