import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

import AppContext from '../components/AppContext';

export default function LogoutScreen(props) {
    const myContext = useContext(AppContext);

    const logout=()=>{
        myContext.logout();
        props.navigation.navigate("Middle");
    }


    useEffect(() => {
        logout();
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
    button: {
        padding: 15,
        backgroundColor: '#FDAC33',
        borderRadius: 10,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});