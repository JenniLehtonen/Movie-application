import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import { useNavigation } from '@react-navigation/native';


const MoviePreview = (props) => {
    
    //For navigating to DetailScreen
    const navigation = useNavigation();

    //Modify the release date to show only the year
    let release_date = props.releaseDate.split("-", 1);

    //Modify the language to start with a capital letter
    let capitalizedLanguage = props.language.charAt(0).toUpperCase()+props.language.slice(1);

    //Get the name of the movie
    let movieTitle = props.name;

    //If the name is too long, make it shorter
    if(movieTitle.length>28){
        movieTitle = movieTitle.slice(0,28)+"...";
    }

    let movieGenre;

    if(props.searchByGenre==true){
        movieGenre = props.genre2
    } else{
        switch (props.genre[0]){
            case 28:
                movieGenre = "Action";
              break;
            case 12:
                movieGenre = "Adventure";
              break;
            case 16:
                movieGenre = "Animation";
              break;
            case 35:
                movieGenre = "Comedy";
              break;
            case 80:
                movieGenre = "Crime";
              break;
            case 99:
                movieGenre = "Documentary";
              break;
            case 18:
                movieGenre = "Drama";
              break;
            case 10751:
                movieGenre = "Family";
              break;
            case 14:
                movieGenre = "Fantasy";
              break;
            case 36:
                movieGenre = "History";
              break;
            case 27:
                movieGenre = "Horror";
              break;
            case 10402:
                movieGenre = "Music";
              break;
            case 9648:
                movieGenre = "Mystery";
              break;
            case 10749:
                movieGenre = "Romance";
              break;
            case 878:
                movieGenre = "Sci-Fi";
              break;
            case 10770:
                movieGenre = "TV Movie";
              break;
            case 53:
                movieGenre = "Thriller";
              break;
            case 10752:
                movieGenre = "War";
              break;
            case 37:
                movieGenre = "Western";
              break;
          }
    }
    
    return (
        
        <View style={styles.resultContainer}>
            <View style={styles.resultBox}>
                <View style={styles.resultImageView}>
                <Image source={props.image} style={styles.resultImage}/>
                </View>
                <View style={styles.resultTextView}>
                <Text style={styles.resultTitle}>{movieTitle}</Text>
                <Text style={styles.resultDetails}>{capitalizedLanguage} | {release_date} | {movieGenre}</Text>
                </View>
                <View style={styles.resultButtonsView}>
                <View style={styles.resultAddButtonView}>
                    <TouchableOpacity style={styles.resultButtonStyle}>
                    <Image source={require('../assets/ribbon.png')} style={styles.resultImageAdd}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultInfoButtonView}>
                    <TouchableOpacity style={styles.resultButtonStyle} 
                    onPress={() => navigation.navigate('DetailScreen', {name:props.name, image:props.image, language:capitalizedLanguage, releaseDate: release_date, genre: movieGenre, description: props.description})}>
                    <View style={{backgroundColor: 'white', height: 25, width: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/play.png')} style={styles.resultImageInfo}/>
                    </View>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View> 
    );
}

export default MoviePreview;