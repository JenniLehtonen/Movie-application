import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviePreview from '../components/MoviePreview';

const SearchScreen = () => {

  let keyValue = 1;

  //API search result
  const [result, setResult] = useState();

  //For holding the API search URL with the user search input
  const [searchUrl, setSearchUrl] = useState("https://api.themoviedb.org");

  //For showing the movies if the user has clicked search button
  const [showMovies, setShowMovies] = useState(false);

  //For handling text input
  const textInputHandler = (enteredText) => {

    //Hide the search results
    setShowMovies(false); 

    //Set the search URL with the user's search input
    setSearchUrl("https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query="+enteredText+"&page=1&include_adult=false")
  }

  //Search movies from API
  const searchMovies = () => {
    setShowMovies(true);
    console.log("moii");
    console.log(result);
}

  // const setMovies = (data) => {
  //   for (let i = 0; i<data.length; i++){
  //     setResult(result => [...result,{overview: data.results[i].overview, genre: data.results[i].genre_ids, name: data.results[i].title, 
  //       language: data.results[i].original_language, releaseDate: data.results[i].release_date, poster: data.results[i].poster_path}]);
  //   }
  // }

   useEffect(() => { 
     //Fetch movies from the API and save them to state
     fetch(searchUrl)
     .then((res) => res.json())
     .then((data) => {console.log(data); setResult(
       {overview: data.results[0].overview, genre: data.results[0].genre_ids, name: data.results[0].title, 
        language: data.results[0].original_language, releaseDate: data.results[0].release_date, poster: data.results[0].poster_path}
        )});
    // .then((data) => setMovies(data));
   }, [searchUrl]);

    console.log(result);
    
  //  console.log("OVERVIEW: " + result.results[0].overview);
  //  console.log("GENRE: " + result.results[0].genre_ids);
  //  console.log("TITLE: " + result.results[0].title);
  //  console.log("LANGUAGE: " + result.results[0].original_language);
  //  console.log("RELEASE DATE: " + result.results[0].release_date);
  //  console.log("POSTER: " + result.results[0].poster_path);
  
  // let testDataArray = [
  //   {name:"Transformers", language: "Eng", genre: "Sci-fi", duration: "2:40", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}, 
  //   {name:"Harry Potter", language: "Eng", genre:"Fiction", duration: "2:30", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}, 
  //   {name:"Die hard 2", language: "Eng", genre:"Action", duration: "2:10", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}, 
  //   {name:"Blancanieves", language: "Spa", genre:"Fairytale", duration: "2:25", image: require('../assets/testImg.jpg'), description:"This is a description of the awesome movie. I'm sure you'll want to watch it!"}];


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.searchFieldContainer}>
          <TextInput style={styles.searchField} placeholderTextColor="black" placeholder="Search a movie" onChangeText={input => textInputHandler(input)}/>
          <TouchableOpacity style={styles.buttonStyle} onPress={searchMovies}>
            <Image source={require('../assets/magnifying-glass.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View> 
      {/* { showMovies==true ?
        result.map((element) => { */}
          {/* return( //TÄHÄN RESULT.RESULTS[0].TITLE JNE. */}
          { showMovies == true?
              <MoviePreview key={keyValue++} name={result.name} language={result.language} releaseDate={result.releaseDate} duration={"2:14"} image={{uri: 'https://image.tmdb.org/t/p/original/' + result.poster}} description={result.overview}/>
         :
          <Text style={styles.searchStyle}>Search a movie...</Text>
        }
            
          {/* );
        })
        :
        <Text>Search a movie</Text>
       
        
      }   */}
    </View>
  );
}

export default SearchScreen;
