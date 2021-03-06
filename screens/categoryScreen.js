import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import styles from '../styles/CategoryScreenStyle';
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = (props) => {

  //For navigating to MoviesByCategoryScreen
  const navigation = useNavigation();

  //API search result
  const [categories, setCategories] = useState();

  const searchUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=e25210b6bbfca7fe71b09ec050cd892b&language=en-US";

  useEffect(() => {
    //Fetch categories from the API and save them to state
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => setCategories(data.genres));
  }, [searchUrl]);

  const toggle = () => {
    props.navigation.toggleDrawer();
  }

  return (
    <View style={styles.container1}>
      <View style={{ width: '100%', paddingTop: 20, paddingLeft: 20 }}>
        <TouchableOpacity onPress={toggle}>
          <Image source={require('../assets/hamburger-menu-icon.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textStyle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={category => (
          <View style={styles.categoryBox}>
            <View style={styles.textView}>
              { category.item.name == "Science Fiction" ?
                <Text style={styles.categoryTitle}>Sci-Fi</Text>
                :
                <Text style={styles.categoryTitle}>{category.item.name}</Text>
              }
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.categoryButtonStyle} onPress={() => navigation.navigate('MoviesByCategoryScreen', { id: category.item.id, category: category.item.name })}>
                <View style={{ backgroundColor: 'white', height: 25, width: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('../assets/play.png')} style={styles.categoryImageButton} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

    </View>
  );
}

export default CategoryScreen;