import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import AppContext from '../components/AppContext';

export default function HomeScreen(props) {
  const myContext = useContext(AppContext);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home page</Text>
          <Text>Welcome, {myContext.name}</Text>    
      </View>
    );
  }