import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import AppContext from '../components/AppContext';

export default function ProfileScreen(props) {
  const myContext = useContext(AppContext);
  const navigation = useNavigation();

  const goToList = () => {
    navigation.navigate("My List");
  }

  async function removeUser() {
    console.log("Removing user " + myContext.name);
    const response = await fetch("https://moviefy-328609.ew.r.appspot.com/rest/userservice/deleteuser/" + myContext.name,
      {
        method: 'DELETE'
      });

    const responseData = await response.json();

    if (responseData.result == true) {
      Alert.alert(
        "Success",
        "You have successfully removed your account.",
        [
          { text: "OK" }
        ]
      );
      myContext.logout();
      props.navigation.navigate("Middle");
    } else {
      Alert.alert(
        "Failure",
        "Deleting failed.",
        [
          { text: "OK" }
        ]
      );
    }
  }

  const toggle = () => {
    props.navigation.toggleDrawer();
  }

  return (
    <View style={styles.screen}>
      <View style={{ width: '100%', paddingTop: 20, marginBottom:30 }}>
        <TouchableOpacity onPress={toggle}>
          <Image source={require('../assets/hamburger-menu-icon.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{myContext.name}'s Profile</Text>
      <View style={styles.screen2}>
        <TouchableOpacity activeOpacity={0.8} onPress={goToList}>
          <Text style={styles.bold}>Go to your list</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={removeUser}>
          <Text style={styles.buttonText}>Remove your account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
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
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  bottom: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});