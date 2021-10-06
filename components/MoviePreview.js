//import * as React from 'react';
import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';
import { useNavigation } from '@react-navigation/native';


const MoviewPreview = (props) => {

    const [movieList, setMovieList] = useState([]);

    
    //For navigating to DetailScreen
    const navigation = useNavigation();

    //Modify the release date to show only the year
    let release_date = props.releaseDate.split("-", 1);

    //Modify the language to start with a capital letter
    let capitalizedLanguage = props.language.charAt(0).toUpperCase()+props.language.slice(1);

    async function addToMylist() {
        const response = await fetch("http://10.0.2.2:3000/api/persons",
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:props.name, language:props.language, genre:props.genre, duration:props.duration, image:props.image})
        });
      
    const responseData = await response.json();
    console.log(responseData);
    setMovieList(movieList=>[...movieList, responseData]);
      }
    
    return (
        
        <View style={styles.resultContainer}>
            <View style={styles.resultBox}>
                <View style={styles.resultImageView}>
                <Image source={props.image} style={styles.resultImage}/>
                </View>
                <View style={styles.resultTextView}>
                <Text style={styles.resultTitle}>{props.name}</Text>
                <Text style={styles.resultDetails}>{capitalizedLanguage} | {release_date} | {props.duration}</Text>
                </View>
                <View style={styles.resultButtonsView}>
                <View style={styles.resultAddButtonView}>
                    <TouchableOpacity style={styles.resultButtonStyle} onPress={addToMylist}>
                    <Image source={require('../assets/ribbon.png')} style={styles.resultImageAdd}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultInfoButtonView}>
                    <TouchableOpacity style={styles.resultButtonStyle} 
                    onPress={() => navigation.navigate('DetailScreen', {name:props.name, image:props.image, language:capitalizedLanguage, releaseDate: release_date, duration:props.duration, description: props.description})}>
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

export default MoviewPreview;