import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SearchScreenStyle';

const SearchScreen = () => {

  let testArray = ["Transformers","Harry Potter","Die hard","Snow white"];
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.searchFieldContainer}>
          <TextInput style={styles.searchField} placeholderTextColor="black" placeholder="Search a movie"/>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image source={require('../assets/magnifying-glass.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View> 
      {
        testArray.map((element) => {
          return(
          <View style={styles.resultContainer}>
          <View style={styles.resultBox}>
            <View style={styles.resultImageView}>
              <Image source={require('../assets/testImg.jpeg')} style={styles.resultImage}/>
            </View>
            <View style={styles.resultTextView}>
              <Text style={styles.resultTitle}>{element}</Text>
              <Text style={styles.resultDetails}>Eng | Fiction | 2:50</Text>
            </View>
            <View style={styles.resultButtonsView}>
              <View style={styles.resultAddButtonView}>
                <TouchableOpacity style={styles.resultButtonStyle}>
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
        })
      }  
    </View>
  );
}

export default SearchScreen;
