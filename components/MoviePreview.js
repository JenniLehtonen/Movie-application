//import * as React from 'react';
import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';

const MoviewPreview = (props) => {
    const [movieList, setMovieList] = useState([]);

    async function addToMylist() {
        const response = await fetch("http://10.0.2.2:3000/api/persons",
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:props.name, language:props.language, genre:props.genre, duration:props.duration})
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
                <Text style={styles.resultDetails}>{props.language} | {props.genre} | {props.duration}</Text>
                </View>
                <View style={styles.resultButtonsView}>
                <View style={styles.resultAddButtonView}>
                    <TouchableOpacity style={styles.resultButtonStyle} onPress={addToMylist}>
                    <Image source={require('../assets/ribbon.png')} style={styles.resultImageAdd}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultInfoButtonView}>
                    <TouchableOpacity style={styles.resultButtonStyle}>
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