import React from 'react';
import { View, Button, Text } from 'react-native';

export default function CategoryScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Categories</Text>
          <Text>{props.extraData}</Text>
       
        
       
      </View>
    );
  }