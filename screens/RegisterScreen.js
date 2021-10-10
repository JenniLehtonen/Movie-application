import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import AppContext from '../components/AppContext';

export default function RegisterScreen(props) {
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const myContext = useContext(AppContext);


    const nameInputHandler = (enteredText) => {
        setNewUser(enteredText);
    }
    const passwordInputHandler = (enteredText) => {
        setNewPassword(enteredText);
    }

    const goToLogin= () => {
      props.navigation.navigate("Login");
    }


    const checkUser = () => {
        if (Object.keys(newUser).length == 0 || Object.keys(newPassword).length == 0) {
            Alert.alert(
                "Warning",
                "Username or password cannot be empty",
                [
                    { text: "OK" }
                ]
            );
        } else {
            addUser();
        }
    }

    async function addUser() {

        const response = await fetch("https://moviefy-328609.ew.r.appspot.com/rest/userservice/addjsonuser",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newUser, password: newPassword })
            });
            
        const responseData = await response.json();

        if (responseData.result == true) {
            Alert.alert(
                "Success",
                "Your account was successfully created",
                [
                    { text: "OK" }
                ]
            );
        } else {
            Alert.alert(
                "Failure",
                "Your account was not created.",
                [
                    { text: "OK" }
                ]
            );
        }

    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.screen2}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your name"
                    placeholderTextColor='#9c9c9c'
                    value={newUser}
                    onChangeText={nameInputHandler} />
                <TextInput style={styles.textInput}
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    placeholderTextColor='#9c9c9c'
                    value={newPassword}
                    onChangeText={passwordInputHandler} />
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={checkUser}>
                    <Text style={styles.buttonText}>Create account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.normal}>Already have an account? </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={goToLogin}>
                  <Text style={styles.bold}>Login</Text>
                  </TouchableOpacity>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        paddingTop:50,
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
        fontWeight:'bold',
    },
    textInput: {
        backgroundColor: '#353241',
        padding: 15,
        color: 'white',
        width: '90%',
        borderRadius: 10,
        marginBottom: 20,
    },
    bottom: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    normal: {
        color: '#9c9c9c',
    },
    bold: {
        fontWeight: 'bold',
        color: '#9c9c9c',
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