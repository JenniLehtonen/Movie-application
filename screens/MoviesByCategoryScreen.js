import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import styles from '../styles/CategoryScreenStyle';

const MoviesByCategoryScreen = ({route}) => {
//For getting the information of the picked category
const {id, name} = route.params;
    return (
      <View >
        <Text>{name}</Text>
      </View>
    );
  }


  export default MoviesByCategoryScreen;