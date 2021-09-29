import React from 'react';
import { View, Button, Text } from 'react-native';

export default function MylistScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>My list</Text>
          <Text>{props.extraData}</Text>
       
        
       
      </View>
    );
  }