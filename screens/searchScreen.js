import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviewPreview from '../components/MoviePreview';

const SearchScreen = () => {

  let testArray = ["Transformers","Harry Potter","Die hard 2","Snow white"];

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
      {
        testArray.map((element) => {
          return(
            <MoviewPreview movie={element}/>
          );
        })
      }  
    </View>
  );
}

export default SearchScreen;
