import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import MylistScreen from './screens/MylistScreen';
import CategoryScreen from './screens/CategoryScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Register">

      <Drawer.Screen name="Register">
        {props => <RegisterScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

          <Drawer.Screen name="Login">
        {props => <LoginScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

        <Drawer.Screen name="Home page">
        {props => <HomeScreen {...props} extraData={"extra"} />}
          </Drawer.Screen>

        <Drawer.Screen name="Search movie">
        {props => <SearchScreen {...props} extraData={"extra"} />}
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

      </Drawer.Navigator>
    </NavigationContainer>
  );
}