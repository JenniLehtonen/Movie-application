import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';


const SearchScreen = () => {
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
      <View style={styles.resultContainer}>
        <View style={styles.resultBox}>
          <View style={styles.resultImageView}>
            <Image source={require('../assets/testImg.jpeg')} style={styles.resultImage}/>
          </View>
          <View style={styles.resultTextView}>
            <Text style={styles.resultTitle}>Transformers</Text>
            <Text style={styles.resultDetails}>Eng | Fiction | 2:50</Text>
          </View>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1C2C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20
  },
  //Search field
  searchContainer: {
    justifyContent: 'flex-start',
    padding: 20,
    width: '100%',
    height: 'auto'
  },
  searchFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  },
  searchField: {
    borderRadius: 25,
    height: 45,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    fontSize: 18
  },

  //Search button
  buttonStyle: {
    marginLeft: 10,
    backgroundColor: '#FDAC33',
    height: 45,
    width: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30
  },

  //Results
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    width: '100%'
  },
  resultBox: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#62606B',
    padding: 10,
    height: 100
  },
  resultTextView: {
    width: '70%',
    flexDirection: 'column',
  },
  resultImageView: {
    width: '30%',
    flexDirection: 'column',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  resultDetails: {
    fontSize: 18,
    color: '#98979A'
  },
  resultImage: {
    height: 80,
    width: 80,
    borderRadius: 20
  }
});

export default SearchScreen;
