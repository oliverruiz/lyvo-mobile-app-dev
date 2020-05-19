import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js'
import Footer from './Footer.js'
import { useNavigation } from '@react-navigation/native';
import {StackNavigator} from 'react-navigation';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {};
  };
  logOut = () => {
    this.props.navigation.navigate("Login");
  }

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header/>
        </View>
        <View style={styles.body}>

        </View>
        <View style={styles.footer}>
          <Footer navigationAction={this.logOut}/>
        </View>
      </View>
    );

  };



};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '20%',
  },
  body: {
    backgroundColor: 'blue',
    width: '100%',
    height: '60%',
  },
  footer: {
    width: '100%',
    height: '20%',
  },
});
