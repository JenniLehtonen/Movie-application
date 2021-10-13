import { View, Text, TextInput, TouchableOpacity, Image, Button, ScrollView, FlatList, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/SearchScreenStyle';

import AppContext from '../components/AppContext';


//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const MylistScreen = (props) => {
  const [hasError, setErrors] = useState(false);
  const [someErrors, setSomeErrors] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const myContext = useContext(AppContext);


  const deleteMovie = async (id) => {
    const response = await fetch("https://moviefy-328609.ew.r.appspot.com/rest/movieservice/deletemovie/" + id,
      {
        method: 'DELETE',
      });
    fetchData();
  }

  async function fetchData() {

    let res = null;
    try {

      res = await fetch("https://moviefy-328609.ew.r.appspot.com/rest/movieservice/getlist/" + myContext.name);
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

  const toggle = () => {
    props.navigation.toggleDrawer();
  }


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
        <View style={{ width: '100%', paddingTop: 20 }}>
          <TouchableOpacity onPress={toggle}>
            <Image source={require('../assets/hamburger-menu-icon.png')} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <Text>{hasError}</Text>
        <Text style={styles.textStyle}>{myContext.name}'s list</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={fetchData}>
          <Text style={styles.buttonText}>Reload list</Text>
        </TouchableOpacity>

        {movies ?
          <FlatList


            data={movies}

            renderItem={({ item }) => (
              <View style={styles.resultContainer}>
                <View style={styles.resultBox}>
                  <View style={styles.resultImageView}>

                    <Image source={{ uri: item.image }} style={styles.resultImage} />
                  </View>
                  <View style={styles.resultTextView}>
                    <Text style={styles.listTitle}>{item.name}</Text>
                    <View style={styles.removeButtonView}>

                      <TouchableOpacity activeOpacity={0.8} style={styles.removeButton} onPress={() => deleteMovie(item.id)}>
                        <Text style={styles.buttonText}>Remove</Text>
                      </TouchableOpacity>

                    </View>

                  </View>

                </View>

              </View>
            )}

            keyExtractor={item => item.id.toString()}

          />
          :
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Your list is empty.</Text>
        }
      </View>
    );
  }
};





export default MylistScreen;