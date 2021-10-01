import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import MylistScreen from './screens/MylistScreen';
import CategoryScreen from './screens/CategoryScreen';
import DetailScreen from './screens/DetailScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home page">

        <Drawer.Screen name="Home page">
        {props => <HomeScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

        <Drawer.Screen name="Search movie" options={{headerShown:false}}>
        {props => <SearchScreen {...props} />}
          </Drawer.Screen>

          <Drawer.Screen name="Profile">
        {props => <ProfileScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

          <Drawer.Screen name="My List">
        {props => <MylistScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

          <Drawer.Screen name="Categories">
        {props => <CategoryScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

          <Drawer.Screen name="DetailScreen" options={{headerShown:false}}>
        {props => <DetailScreen {...props} />}
          </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}