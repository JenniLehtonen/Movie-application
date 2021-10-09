import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';

import AppContext from '../components/AppContext';

const HomeScreen = () => {
  const myContext = useContext(AppContext);

  //For giving the key in the FlatList
  let keyValue = 1;

   //For navigating to MoviesByCategoryScreen
   const navigation = useNavigation();

  //API search result
  const [categories, setCategories] = useState();

  const searchUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=&language=en-US";

  useEffect(() => { 
    //Fetch categories from the API and save them to state
    fetch(searchUrl)
    .then((res) => res.json())
    .then((data) => setCategories(data.genres));
  }, [searchUrl]);

    return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>Welcome, {myContext.name}</Text>
          <Image style={{marginBottom: 20}} source={require('../assets/moviefy-logo.jpg')}/>
          <View>
            <Text style={styles.headers}>Categories</Text>
            <FlatList
            horizontal
              data={categories}
              renderItem={category => (
              <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('MoviesByCategoryScreen', {id:category.item.id, category:category.item.name})}>
                <View style={styles.categoryNameContainer}>
                  <Text style={{color: 'white', fontWeight: 'bold',}}>{category.item.name}</Text>
                </View>
              </TouchableOpacity> 
            )}
            />
          </View>
      </View>
    );
  }
  export default HomeScreen;