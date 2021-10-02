import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviePreview from '../components/MoviePreview';

const SearchScreen = () => {

  let keyValue = 1;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});
  const [searchUrl, setSearchUrl] = useState();
  const [searchResultArray, setSearchResultArray] = useState({});

  //For handling text input
  const textInputHandler = (enteredText) => {
    setSearch(enteredText);
    setSearchUrl("https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query="+search+"&page=1&include_adult=false")
  }

  //Search movies from API
  const searchMovies = () => {
    console.log("moii");
    // let response = await fetch(
    //   'https://api.themoviedb.org/3/search/movie?api_key= &language=en-US&query=jumanji&page=1&include_adult=false'
    // );
    // let json = await response.json();
    // setResult(json);
    // console.log(result);

    for (let i = 0; i < result.length; i++ ){
      setSearchResultArray(searchResultArray.push({name:result.results[i].title, language: result.results[i].original_language, 
        genre: result.results[i].genre_ids, duration: "2:30", image: result.results[i].poster_path, description: result.results[i].overview}));
  }
  console.log("ARRAY: " + searchResultArray);
}
  

   useEffect(() => { 
     fetch(searchUrl)
     .then((res) => res.json())
     .then((data) => setResult(data));
   }, [searchUrl]);

    console.log(result);
  //  console.log("OVERVIEW: " + result.results[0].overview);
  //  console.log("GENRE: " + result.results[0].genre_ids);
  //  console.log("TITLE: " + result.results[0].title);
  //  console.log("LANGUAGE: " + result.results[0].original_language);
  //  console.log("RELEASE DATE: " + result.results[0].release_date);
  //  console.log("POSTER: " + result.results[0].poster_path);
  
  let testDataArray = [
    {name:"Transformers", language: "Eng", genre: "Sci-fi", duration: "2:40", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}, 
    {name:"Harry Potter", language: "Eng", genre:"Fiction", duration: "2:30", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}, 
    {name:"Die hard 2", language: "Eng", genre:"Action", duration: "2:10", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}, 
    {name:"Blancanieves", language: "Spa", genre:"Fairytale", duration: "2:25", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}];


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
            <MoviePreview key={keyValue++} name={element.name} language={element.language} genre={element.genre} duration={element.duration} image={element.image} description={element.description}/>
          );
        })
      }  
    </View>
  );
}

export default SearchScreen;
