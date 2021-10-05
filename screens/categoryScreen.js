import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import styles from '../styles/CategoryScreenStyle';
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = () => {

  //For navigating to MoviesByCategoryScreen
  const navigation = useNavigation();

  //API search result
  const [categories, setCategories] = useState();

let testi = [{
  "id": 18,
  "name": "Drama",
},
{
  "id": 10751,
  "name": "Family",
},
{
  "id": 14,
  "name": "Fantasy",
},
{
  "id": 36,
  "name": "History",
},
{
  "id": 27,
  "name": "Horror",
}, 
{
  "id": 12,
  "name": "Adventure",
},
 {
  "id": 16,
  "name": "Animation",
},
 {
  "id": 35,
  "name": "Comedy",
},
 {
  "id": 80,
  "name": "Crime",
},
{
  "id": 99,
  "name": "Documentary",
},];
  useEffect(() => { 
    //Fetch categories from the API and save them to state
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=&language=en-US")
    .then((res) => res.json())
    .then((data) => setCategories(data.genres));
  }, ["https://api.themoviedb.org/3/genre/movie/list?api_key=&language=en-US"]);
  console.log(categories);
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Categories</Text>
        <FlatList
        data={testi}
        renderItem={category => (
          <View style={styles.resultBox}>
                <Text style={styles.resultTitle}>{category.item.name}</Text>
                <TouchableOpacity style={styles.resultButtonStyle} onPress={() => navigation.navigate('MoviesByCategoryScreen', {id:category.item.id, name:category.item.name})}>
                    <View style={{backgroundColor: 'white', height: 25, width: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/play.png')} style={styles.resultImageInfo}/>
                    </View>
                    </TouchableOpacity>
          </View> 
        )}
        />
    
      </View>
    );
  }


  export default CategoryScreen;