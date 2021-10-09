import { View, Text, TextInput, TouchableOpacity, Image, Button, ScrollView, FlatList, Alert, ActivityIndicator, StyleSheet } from 'react-native';

import MoviePreview from '../components/MoviePreview';
import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/SearchScreenStyle';

import AppContext from '../components/AppContext';


//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const MylistScreen = () => {
  const [hasError, setErrors] = useState(false);
  const [someErrors, setSomeErrors] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const myContext = useContext(AppContext);


  const deleteMovie = async (id) =>{
    const response = await fetch ("http://10.0.2.2:3000/api/persons/"+id,
    {
      method:'DELETE',
    });
    fetchData();
  }

  async function fetchData() {

    let res = null;
    try {

      res = await fetch("http://10.0.2.2:8080/rest/movieservice/getlist/" + myContext.name);
    }
    catch (error) {
      setErrors(true);
    }

    try {
      //Getting json from the response
      const responseData = await res.json();
      console.log(responseData);
      setMovies(responseData);
    }
    catch (err) {
      setErrors(true);
      setSomeErrors("ERROR: " + hasError + " my error " + err);
      console.log(someErrors);
    }
  }


  useEffect(() => {
    if (isLoading == true) {
      setLoading(false);
      fetchData();

    }
  });


  if (isLoading == true) {
    return (
      <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  else if (hasError) {
    return (
      <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
        <Text>{hasError}</Text>
        <Text>{"" + someErrors}</Text>
      </View>
    );
  }

  else {
    return (
      <View style={styles.container}>
        <Text>{hasError}</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={fetchData}>
          <Text style={styles.buttonText}>Reload list</Text>
        </TouchableOpacity>

        <FlatList

            
            data={movies}
            
            renderItem={({item}) => (
              <View style={styles.resultContainer}>
              <View style={styles.resultBox}>
                <View style={styles.resultImageView}>
                  
                <Image source={item.image} style={styles.resultImage}/>
                </View>
              <View style={styles.resultTextView}>
                 <Text style={styles.resultTitle}>{item.name}</Text>
                <View >
                
                <Button style={styles.resultButtonStyle} title="Remove" onPress={()=>deleteMovie(item.id)}/>
                
                </View>
                
                </View>

                </View>
          
                </View>
            )}
            
            keyExtractor={item => item.id.toString()}

        />
        
      </View>
    );
  }
};
/*const styles=StyleSheet.create({
  container:{
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#0f0',
    backgroundColor: '#fce',    
  }
});*/




export default MylistScreen;