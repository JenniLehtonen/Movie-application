import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AppContext from '../components/AppContext';

export default function ProfileScreen(props) {
  const myContext = useContext(AppContext);

  const goToList = () => {
    props.navigation.navigate("My List");
  }

  async function removeUser() {
    console.log("Removing user "+myContext.name);
    const response = await fetch("http://10.0.2.2:8080/rest/userservice/deleteuser/"+myContext.name,
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
      props.navigation.navigate(" ");
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

    return (
      <View style={styles.screen}>
        <Text style={styles.title}>{myContext.name}</Text>
        <View style={styles.screen2}>
          <Text style={styles.text}>You have (x) items on your list.</Text>
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