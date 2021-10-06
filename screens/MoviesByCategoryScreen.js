import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles/CategoryScreenStyle';
import MoviePreview from '../components/MoviePreview';

const MoviesByCategoryScreen = ({route}) => {
let keyValue = 1;

//For getting the information of the picked category
const {id, name} = route.params;

const [loading, setLoading] = useState(true);

 //API search result
 const [movies, setMovies] = useState();
 
 const searchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id;

 const timeOut = () => {
  setTimeout(() => {
    setLoading(false);
  }, 2500);
}

let array = [];

const testi = () => {
  for(let i = 0; i<20; i++){
    array.push({name:movies.results[i].original_title, langueage:movies.results[i].original_language});
  }
  console.log("array:");
  console.log("-----------------------------------------------------------------------");
console.log(array);
}

 useEffect(() => { 
   setLoading(true);
  //Fetch movies from the API and save them to state
  fetch(searchUrl)
  .then((res) => res.json())
  .then((data) => setMovies(data));
    // {overview: data.results[0].overview, genre: data.results[0].genre_ids, name: data.results[0].title, 
    //  language: data.results[0].original_language, releaseDate: data.results[0].release_date, poster: data.results[0].poster_path}
     
    //testi();
     timeOut();
}, [searchUrl]);

console.log(movies);
//console.log(movies.results[0].original_title);

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{name} movies</Text>
        <View style={styles.movieContainer}>
          { loading == false ?
            // <MoviePreview  key={keyValue++} name={movies.name} language={movies.language} releaseDate={movies.releaseDate} 
            // duration={"2:14"} image={{uri: 'https://image.tmdb.org/t/p/original/' + movies.poster}} description={movies.overview}/>
        //    <FlatList
        // data={movies}
        // renderItem={({movie}) => (
        //   <MoviePreview  key={keyValue++} name={movie.name} language={movie.language} releaseDate={movie.release_date} 
        //   duration={"2:14"} image={{uri: 'https://image.tmdb.org/t/p/original/' + movie.poster}} description={movie.overview}/>
        // )}/>
        <Text>joo</Text>
        
         :
         <ActivityIndicator size="large" color="white" animating={loading}/>
         }
        </View>
        
        
        
      </View>
    );
  }


  export default MoviesByCategoryScreen;