import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import { RFValue } from "react-native-responsive-fontsize";


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.headerText}> BioTech Hacks </Text>
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
    justifyContent: 'center',
  },
  textWrapper: {
    height: '70%',
    width: '60%',
  },
  headerText: {
    marginTop: '20%',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 5,
    //fontSize: RFValue(20)
    fontSize: 30,

  }
});
