import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/DetailScreenStyle';

const DetailScreen = ({route}) => {

//For navigating back to SearchScreen
const navigation = useNavigation();

//For getting the information of the picked movie
const {name} = route.params;
const {image} = route.params;
const {language} = route.params;
const {genre} = route.params;
const {duration} = route.params;
  return(
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.goBackBtnView}>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Search movie')}>
              <Image source={require('../assets/arrow.png')} style={styles.ImageAdd}/>
          </TouchableOpacity>
        </View>
        <View style={styles.addButtonView}>
          <TouchableOpacity style={styles.ButtonStyle}>
              <Image source={require('../assets/ribbon.png')} style={styles.ImageAdd}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContentStyle}>
        <Image source={image} style={styles.Image}/>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.detailsStyle}>{language} | {genre} | {duration}</Text>
        <View style={styles.borderstyle}></View>
        <View>
          <Text style={styles.titleStyle2}>Story line</Text>
          <Text style={styles.detailsStyle}>An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, 
            with a clue to the ultimate power held by a teenager.</Text>
          <Text style={styles.titleStyle2}>Star cast</Text>
        </View>
      </View>
      
    </View>
  );
}

export default DetailScreen;
