import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';


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
    height: 25,
    width: 25
  },

  //Results
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 0,
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
    width: '60%',
    flexDirection: 'column',
    paddingLeft: 10
  },
  resultImageView: {
    width: '25%',
    flexDirection: 'column'
  },
  resultButtonsView: {
    width: '15%',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  resultAddButtonView: {
    marginBottom: 10
  },
  resultInfoButtonView: {
    justifyContent: 'flex-end'
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
  },
  resultImageAdd: {
    height: 20,
    width: 20
  },
  resultImageInfo: {
    height: 15,
    width: 15
  },
  resultButtonStyle: {
    backgroundColor: '#4C4956',
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default SearchScreen;
