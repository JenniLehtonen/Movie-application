import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviewPreview from '../components/MoviePreview';

const SearchScreen = () => {

  let testDataArray = [{name:"Transformers", language: "Eng", genre: "Sci-fi", duration: "2:40"}, {name:"Harry Potter", language: "Eng", genre:"Fiction", duration: "2:30"}, 
  {name:"Die hard 2", language: "Eng", genre:"Action", duration: "2:10"}, {name:"Blancanieves", language: "Spa", genre:"Fairytale", duration: "2:25"}];


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
        testDataArray.map((element) => {
          return(
            <MoviewPreview name={element.name} language={element.language} genre={element.genre} duration={element.duration}/>
          );
        })
      }  
    </View>
  );
}

export default SearchScreen;
