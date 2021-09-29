import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.textStyle}>Search</Text>
        <TextInput style={styles.searchBox} placeholder="Search a movie"/>
        <TouchableOpacity>
        <Image source={require('./assets/magnifying-glass.svg')}
          style={styles.image}/>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#1F1C2C',
    width: '100%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20
  },
  image: {
    width: "100%",
    height: "100%"
  },
  searchBox: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 40,
    padding: 10,
    width: '70%'
  },
  resultContainer: {
  }
});

export default SearchScreen;
