import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../components/AppContext';

const HomeScreen = () => {
  const myContext = useContext(AppContext);
  const [hasError, setErrors] = useState(false);
  const [someErrors, setSomeErrors] = useState('');
  const [isLoading, setLoading] = useState(true);
  //For giving the key in the FlatList
  let keyValue = 1;

  //For navigating to MoviesByCategoryScreen
  const navigation = useNavigation();

  //API search result
  const [categories, setCategories] = useState();

  const searchUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=e25210b6bbfca7fe71b09ec050cd892b&language=en-US";
  const [mylist, setMylist] = useState();

  const goToMyList = () => {
    navigation.navigate("My List");
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
      setMylist(responseData);
    }
    catch (err) {
      setErrors(true);
      setSomeErrors("ERROR: " + hasError + " my error " + err);
      console.log(someErrors);
    }
  }

  useEffect(() => {
    //Fetch categories from the API and save them to state
    fetchData();
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => setCategories(data.genres));

    if (isLoading == true) {
      setLoading(false);
    }
  }, [searchUrl]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome, {myContext.name}</Text>
      <Image style={{ marginBottom: 70, marginTop: 70 }} source={require('../assets/moviefy-logo.jpg')} />

      <View style={{ width: '100%', marginBottom: 20 }}>
        <TouchableOpacity onPress={goToMyList}>
          <Text style={styles.headers}>Your list</Text>
        </TouchableOpacity>
        {mylist ?
          <FlatList
            horizontal
            data={mylist}
            renderItem={({ item }) => (
              <Image source={{ uri: item.image }} style={styles.resultImage} />
            )}
            keyExtractor={item => item.id.toString()}
          />
          :
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Your list is empty.</Text>
        }
      </View>
      <View style={{ width: '100%' }}>
        <Text style={styles.headers}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
            renderItem={category => (
              <View style={styles.categoryItem}>
                <ImageBackground source={require('../assets/genreBackground.jpg')} style={{flex:1, width:'100%', height:'100%'}} resizeMode="cover">
                  <TouchableHighlight key={keyValue++} underlayColor="orange" style={styles.categoryItem} onPress={() => navigation.navigate('MoviesByCategoryScreen', {id:category.item.id, category:category.item.name})}>
                    <View style={styles.categoryNameContainer}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>{category.item.name}</Text>
                    </View>
                  </TouchableHighlight> 
                </ImageBackground>
              </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}
export default HomeScreen;