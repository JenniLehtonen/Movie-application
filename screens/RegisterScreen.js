import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
export default function RegisterScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Register</Text>
          <Text>{props.extraData}</Text>
       
        
       
      </View>
    );
  }