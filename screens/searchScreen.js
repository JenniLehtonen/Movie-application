import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviePreview from '../components/MoviePreview';

const SearchScreen = (props) => {

  //API search result
  const [result, setResult] = useState();

  //For holding the API search URL with the user search input. Here we need to set some default query first.
  const [searchUrl, setSearchUrl] = useState("https://api.themoviedb.org/3/search/movie?api_key=68f7aed1b2f4271575d8bd561ee17fba&language=en-US&query=movie&page=1&include_adult=false");

  //For showing the movies if the user has clicked search button
  const [showMovies, setShowMovies] = useState(false);

  //For handling text input
  const textInputHandler = (enteredText) => {

    //Hide the search results
    setShowMovies(false);

    //Set the search URL with the user's search input
    setSearchUrl("https://api.themoviedb.org/3/search/movie?api_key=68f7aed1b2f4271575d8bd561ee17fba&language=en-US&query=" + enteredText + "&page=1&include_adult=false")
  }

  //Search movies from API
  const searchMovies = () => {
    setShowMovies(true);
  }

  useEffect(() => {
    //Fetch movies from the API and save them to state
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => setResult(data.results));

  }, [searchUrl]);

  console.log(result);

  const toggle = () => {
    props.navigation.toggleDrawer();
  }

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', paddingTop: 20}}>
        <TouchableOpacity onPress={toggle}>
          <Image source={require('../assets/hamburger-menu-icon.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.searchFieldContainer}>
          <TextInput style={styles.searchField} placeholderTextColor="black" placeholder="Search a movie" onChangeText={input => textInputHandler(input)} />
          <TouchableOpacity style={styles.buttonStyle} onPress={searchMovies}>
            <Image source={require('../assets/magnifying-glass.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
      {showMovies == true ?
        <FlatList
          data={result}
          keyExtractor={item => item.id.toString()}
          renderItem={movie => (
            <MoviePreview name={movie.item.original_title} language={movie.item.original_language} releaseDate={movie.item.release_date}
              genre={movie.item.genre_ids} genre2={"category"} searchByGenre={false} image= {'https://image.tmdb.org/t/p/original' + movie.item.poster_path} description={movie.item.overview} />
          )} />
        :
        <Text style={styles.searchStyle}>Search a movie...</Text>
      }


    </View>
  );
}

export default SearchScreen;