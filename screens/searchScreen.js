import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviePreview from '../components/MoviePreview';

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});
  const url = `https://api.themoviedb.org/3/search/movie?api_key=        &language=en-US&query=jumanji&page=1&include_adult=false`;

  //For handling text input
  const textInputHandler = (enteredText) => {
    setSearch(enteredText);
  }

  //Search movies from API
  // const searchMovies = async () => {
  //   //const url = `https://api.themoviedb.org/3/movie/550?api_key=`;
  //   let response = await fetch(
  //     'https://api.themoviedb.org/3/movie/550?api_key='
  //   );
  //   let json = await response.json();
  //   console.log(json);
  // }

   useEffect(() => { 
     fetch(url)
     .then((res) => res.json())
     .then((data) => setResult(data));
   }, [url]);
   console.log(result);
   console.log("OVERVIEW: " + result.results[0].overview);
   console.log("GENRE: " + result.results[0].genre_ids);
   console.log("TITLE: " + result.results[0].title);
   console.log("LANGUAGE: " + result.results[0].original_language);
   console.log("RELEASE DATE: " + result.results[0].release_date);
   console.log("POSTER: " + result.results[0].poster_path);
  
  let testDataArray = [{name:"Transformers", language: "Eng", genre: "Sci-fi", duration: "2:40", image: require('../assets/testImg.jpg')}, {name:"Harry Potter", language: "Eng", genre:"Fiction", duration: "2:30", image: require('../assets/testImg.jpg')}, 
  {name:"Die hard 2", language: "Eng", genre:"Action", duration: "2:10", image: require('../assets/testImg.jpg')}, {name:"Blancanieves", language: "Spa", genre:"Fairytale", duration: "2:25", image: require('../assets/testImg.jpg')}];


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.searchFieldContainer}>
          <TextInput style={styles.searchField} placeholderTextColor="black" placeholder="Search a movie" onChangeText={input => textInputHandler(input)}/>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => searchMovies}>
            <Image source={require('../assets/magnifying-glass.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View> 
      {
        testDataArray.map((element) => {
          return(
            <MoviePreview name={element.name} language={element.language} genre={element.genre} duration={element.duration} image={element.image}/>
          );
        })
      }  
    </View>
  );
}

export default SearchScreen;
