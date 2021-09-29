import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
export default function ProfileScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Profile</Text>
          <Text>{props.extraData}</Text>
       
        
       
      </View>
    );
  }