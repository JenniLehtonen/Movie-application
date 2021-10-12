import React, { useContext, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppContext from '../components/AppContext';

export default function MiddleScreen(props) {
  const myContext = useContext(AppContext);

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