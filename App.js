import React, { useState, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppContext from './components/AppContext';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import MylistScreen from './screens/MylistScreen';
import CategoryScreen from './screens/CategoryScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';


const Drawer = createDrawerNavigator();


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  }
  const logout = () => {
    setIsLoggedIn(false);
    navigation.navigate("Login");

  }

  const userSettings = {
    isLoggedIn,
    login,
    logout,
  };

  if (userSettings.isLoggedIn == true) {
    return (
      <AppContext.Provider value={userSettings}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home page">

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

            <Drawer.Screen name="Logout">
              {props => <LogoutScreen {...props} extraData={"extra"} />}
            </Drawer.Screen>

          </Drawer.Navigator>
        </NavigationContainer>
      </AppContext.Provider>

    );
  } else {
    return (
      <AppContext.Provider value={userSettings}>

        <NavigationContainer>

          <Drawer.Navigator initialRouteName="Login">

            <Drawer.Screen name="Home page">
              {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Register" options={{ headerShown: false }}>
              {props => <RegisterScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Login" options={{ headerShown: false }}>
              {props => <LoginScreen {...props} />}
            </Drawer.Screen>

          </Drawer.Navigator>
        </NavigationContainer>
      </AppContext.Provider>

    )
  }
}
