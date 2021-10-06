import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import AppContext from '../components/AppContext';

export default function HomeScreen(props) {
  const myContext = useContext(AppContext);

useEffect(()=>{
    if (myContext.isLoggedIn) {
        props.navigation.navigate("Home page");
      } else {
        props.navigation.navigate("Login");
      }
});

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is the middle screen.</Text>
          <Text>You are not supposed to see this.</Text>

      </View>
    );
  }