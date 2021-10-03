import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import MoviePreview from '../components/MoviePreview';

const SearchScreen = () => {

  let keyValue = 1;
  const [search, setSearch] = useState("https://api.themoviedb.org");
  const [result, setResult] = useState();
  const [searchUrl, setSearchUrl] = useState();
  const [loaded, setLoaded] = useState(false);

  //For handling text input
  const textInputHandler = (enteredText) => {
    setSearch(enteredText);
    setSearchUrl("https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query="+search+"&page=1&include_adult=false")
  }

  //Search movies from API
  const searchMovies = () => {
    setLoaded(true);
    console.log("moii");
    console.log(result);
    // let response = await fetch(
    //   'https://api.themoviedb.org/3/search/movie?api_key= &language=en-US&query=jumanji&page=1&include_adult=false'
    // );
    // let json = await response.json();
    // setResult(json);
    // console.log(result);

  //   for (let i = 0; i < result.length; i++ ){
  //     setSearchResultArray(searchResultArray.push({name:result.results[i].title, language: result.results[i].original_language, 
  //       genre: result.results[i].genre_ids, duration: "2:30", image: result.results[i].poster_path, description: result.results[i].overview}));
  // }
 
}
  

   useEffect(() => { 
     fetch(searchUrl)
     .then((res) => res.json())
     .then((data) => setResult({overview: data.results[0].overview, genre: data.results[0].genre_ids, name: data.results[0].title, language: data.results[0].original_language, releaseDate: data.results[0].release_date, poster: data.results[0].poster_path}));
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
          <TouchableOpacity style={styles.buttonStyle} onPress={searchMovies}>
            <Image source={require('../assets/magnifying-glass.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View> 
      {/* { loaded==true ?
        result.map((element) => { */}
          {/* return( //TÄHÄN RESULT.RESULTS[0].TITLE JNE. */}
          { loaded == true?
              <MoviePreview key={keyValue++} name={result.title} language={result.language} genre={result.genre} duration={"2:14"} image={require('../assets/testImg.jpg')} description={result.overview}/>
         :
         <Text>Search a movie</Text>
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
