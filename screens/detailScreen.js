import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';

const DetailScreen = ({route, navigation}) => {
const {name} = route.params;
const {image} = route.params;
const {language} = route.params;
const {genre} = route.params;
const {duration} = route.params;
  return(
    <View style={styles.container}>
      <Image source={image} style={styles.Image}/>
      <Text style={styles.titleStyle}>{name}</Text>
      <Text style={styles.detailsStyle}>{language} | {genre} | {duration}</Text>
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
  Image: {
    height: 200,
    width: 200,
    borderRadius: 40
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20
  },
  detailsStyle: {
    fontSize: 16,
    color: '#98979A'
  },
});

export default DetailScreen;
