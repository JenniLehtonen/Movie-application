import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppContext from './components/AppContext';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import MylistScreen from './screens/MylistScreen';
import CategoryScreen from './screens/CategoryScreen';
import RegisterScreen from './screens/RegisterScreen';
import MiddleScreen from './screens/MiddleScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';
import DetailScreen from './screens/DetailScreen';
import MoviesByCategoryScreen from './screens/MoviesByCategoryScreen';

const Drawer = createDrawerNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const login = () => {
    setIsLoggedIn(true);
  }
  const logout = () => {
    setIsLoggedIn(false);
  }

  const userSettings = {
    isLoggedIn,
    name,
    setName,
    login,
    logout,
  };

  if (userSettings.isLoggedIn == true) {
    return (
      <AppContext.Provider value={userSettings}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home page">

            <Drawer.Screen name="Home page" options={{ headerShown: false }}>
              {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Search movie" options={{ headerShown: false }}>
              {props => <SearchScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Profile" options={{ headerShown: false }}>
              {props => <ProfileScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="My List" options={{ headerShown: false }}>
              {props => <MylistScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Categories" options={{ headerShown: false }}>
              {props => <CategoryScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Logout" options={{ headerShown: false }}>
              {props => <LogoutScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Middle" options={{ headerShown: false, drawerItemStyle:{height:0}}}>
              {props => <MiddleScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="DetailScreen" options={{ headerShown: false, drawerItemStyle:{height:0}}}>
              {props => <DetailScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="MoviesByCategoryScreen" options={{ headerShown: false, drawerItemStyle:{height:0}}} >
              {props => <MoviesByCategoryScreen {...props} />}
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

            <Drawer.Screen name="Register" options={{ headerShown: false }}>
              {props => <RegisterScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Login" options={{ headerShown: false }}>
              {props => <LoginScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="Middle" options={{ headerShown: false, drawerItemStyle:{height:0}}}>
              {props => <MiddleScreen {...props} />}
            </Drawer.Screen>

          </Drawer.Navigator>
        </NavigationContainer>
      </AppContext.Provider>

    )
  }
}