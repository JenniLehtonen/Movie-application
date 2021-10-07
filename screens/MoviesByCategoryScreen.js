import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles/CategoryScreenStyle';
import MoviePreview from '../components/MoviePreview';

const MoviesByCategoryScreen = ({route}) => {

  //For giving the key in the FlatList
  let keyValue = 1;

  //For getting the information of the picked category
  const {id, name} = route.params;

  //If loading is true, show ActivityIndicator, otherwise hide it
  const [loading, setLoading] = useState(true);

  //API search result
  const [movies, setMovies] = useState();
  
  const searchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id;

  const timeOut = () => {
  //Hide the ActivityIndicator after the specified time
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }

  useEffect(() => { 
    setLoading(true);
    //Fetch movies from the API and save them to state
    fetch(searchUrl)
    .then((res) => res.json())
    .then((data) => setMovies(data.results));

    //Set the timer for the ActivityIndicator
    timeOut();
  }, [searchUrl]);

      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{name} movies</Text>
          <View style={styles.movieContainer}>
            { loading == false ?
            <FlatList
              data={movies}
              renderItem={movie => (
                <MoviePreview  key={keyValue++} name={movie.item.original_title} language={movie.item.original_language} releaseDate={movie.item.release_date} 
                duration={"2:14"} image={{uri: 'https://image.tmdb.org/t/p/original/' + movie.item.poster_path}} description={movie.item.overview}/>
              )}/>   
          :
          <>
            <Text style={styles.categoryTitle}>Searching for movies..</Text>
            <ActivityIndicator size="large" color="white" animating={loading}/>
          </>
          }
          </View>
        </View>
      );
  }


  export default MoviesByCategoryScreen;