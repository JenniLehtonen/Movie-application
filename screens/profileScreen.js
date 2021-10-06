import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AppContext from '../components/AppContext';

export default function ProfileScreen(props) {
  const myContext = useContext(AppContext);

  const goToList= () => {
    props.navigation.navigate("My List");
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{myContext.name}</Text>
      <View style={styles.screen2}>
        <Text style={styles.text}>You have (x) items on your list.</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={goToList}>
          <Text style={styles.bold}>Go to your list</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  bold: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    backgroundColor: '#FDAC33',
    borderRadius: 10,
    width: '90%',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});