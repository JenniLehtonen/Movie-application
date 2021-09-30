import React from 'react';
import { View, Button, Text } from 'react-native';

export default function DetailScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home page</Text>
          <Text>{props.extraData}</Text>
       
        
       
      </View>
    );
  }