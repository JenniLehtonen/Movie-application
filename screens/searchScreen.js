import React, {useState} from 'react';
import { View, Button, Text, FlatList } from 'react-native';

export default function SearchScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Search page</Text>
          <Text>{props.extraData}</Text>
       
        
       
      </View>
    );
  }