import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import AppContext from '../components/AppContext';

export default function MiddleScreen(props) {
  const myContext = useContext(AppContext);


  const timeout = (ms) => { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (myContext.isLoggedIn) {
      setTimeout(() => {
        props.navigation.navigate("Home page");
      }, 2000);

    } else {
      props.navigation.navigate("Login");
    }
  });

  return (
    <View style={styles.screen}>
      <View style={styles.screen2}>
        <Image source={require('../assets/moviefy-logo.jpg')} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#1F1C2C',
    height: '100%',
  },
  screen2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});