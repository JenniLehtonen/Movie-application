import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';


const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.searchFieldContainer}>
          <TextInput style={styles.searchField} placeholderTextColor="black" placeholder="Search a movie"/>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image source={require('../assets/magnifying-glass.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View>  
      <View style={styles.resultContainer}>
        <View>
        <Text>result</Text>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1C2C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20
  },
  //Search field
  searchContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#1F1C2C',
    width: '100%'
  },
  searchFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  },
  searchField: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 45,
    padding: 10,
    width: '80%'
  },
  //Search button
  buttonStyle: {
    marginLeft: 10,
    backgroundColor: '#FDAC33',
    height: 45,
    width: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30
  },
  resultContainer: {
  }
});

export default SearchScreen;
