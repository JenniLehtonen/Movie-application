import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    attributionContainer: {
      marginTop: 'auto'
    },
    //For ScrollView
    ScrollViewStyle: {
      height: 155
    },
    //For go back and add to list buttons
    buttonView: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 30
    },
    addButtonView: {
      width: '50%',
      alignItems: 'flex-end'
    },
    goBackBtnView: {
      width: '50%'
    },

    //For aligning the information of the movie
    textContentStyle: {
      alignItems: 'center'
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
      marginTop: 5,
      marginBottom: 10
    },
    detailsStyle: {
      marginBottom: 10,
      fontSize: 16,
      color: '#98979A'
    },
    tmdbStyle: {
      color: '#98979A',
      fontSize: 14,
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