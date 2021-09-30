import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({route}) => {

//For navigating back to SearchScreen
const navigation = useNavigation();

const {name} = route.params;
const {image} = route.params;
const {language} = route.params;
const {genre} = route.params;
const {duration} = route.params;
  return(
    <View style={styles.container}>
      <View styles={styles.buttonView}>
        <View styles={styles.addButtonView}>
          <TouchableOpacity style={styles.ButtonStyle}>
              <Image source={require('../assets/ribbon.png')} style={styles.ImageAdd}/>
          </TouchableOpacity>
        </View>
        <View styles={styles.goBackBtnView}>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Search movie')}>
              <Image source={require('../assets/arrow.png')} style={styles.ImageAdd}/>
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

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1F1C2C',
    padding: 20
  },
  borderstyle:{
    marginTop: 10,
    borderBottomColor: '#FDAC33',
    borderBottomWidth: 1,
    marginBottom: 30,
    width: '80%'
  },
  buttonView: {
    flexDirection: 'row',
  },
  addButtonView: {
    backgroundColor: 'pink',
    height: 55,
  },
  goBackBtnView: {
    backgroundColor: 'green'
  },
  textContentStyle: {
    alignItems: 'center',
  },

  //Image styles
  Image: {
    height: 180,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 40
  },
  ImageAdd: {
    height: 20,
    width: 20
  },

  //Text styles
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  titleStyle2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10
  },
  detailsStyle: {
    marginBottom: 10,
    fontSize: 16,
    color: '#98979A'
  },

  //Button styles
  ButtonStyle: {
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

export default DetailScreen;
