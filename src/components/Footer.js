import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
//import { SocialIcon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import {StackNavigator} from 'react-navigation';



export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.getLinkedin = this.getLinkedin.bind(this);
    this.state = {};
  };

  getLinkedin = () => {
    Linking.openURL("https://www.linkedin.com")
  };
  getFacebook = () => {
    Linking.openURL("https://www.facebook.com")
  };
  getInstagram = () => {
    Linking.openURL("https://www.instagram.com")
  };




  render(){

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.linkedin} onPress={this.getLinkedin}>
            <Text style={styles.linkedinText}> linkedin </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook} onPress={this.getFacebook}>
            <Text style={styles.facebookText}> facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.instagram} onPress={this.getInstagram}>
            <Text style={styles.instagramText}> instagram </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigation} onPress={this.props.navigationAction}>
            <Text style={styles.navigationText}> Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  };



};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192733",
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }, buttons: {
    height: '100%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, navigation: {
    width: '15%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    borderRadius: 30,
  },
  navigationText: {
    fontSize: 12,
    color: "white",
  },
  instagram: {
    width: '20%',
    height: '30%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  instagramText: {
    fontSize: 12,
    color: "white",
  },
  facebook: {
    width: '20%',
    height: '30%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  facebookText: {
    fontSize: 12,
    color: "white",
  },
  linkedin: {
    width: '20%',
    height: '30%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  linkedinText: {
    fontSize: 12,
    color: "white",
  },
});
