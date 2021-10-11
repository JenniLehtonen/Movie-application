import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      container1: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        paddingTop: 20,
        paddingBottom: 50,
        alignItems: 'center'
      },
      container2: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        paddingTop: 20,
        paddingBottom: 110,
        alignItems: 'center'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20,
        marginBottom: 10
      },
      categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
      },
      categoryBox: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: '#62606B',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        height: 80,
        width: 220,
        marginTop: 10
      },
      textView: {
        width: '70%',
        paddingLeft: 25
      },
      buttonView: {
        width: '30%'
      },
      categoryButtonStyle: {
        backgroundColor: '#4C4956',
        height: 35,
        width: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
      },
      categoryImageButton: {
        height: 15,
        width: 15
      },
      movieContainer: {
        justifyContent: 'flex-start',
        padding: 20,
        width: '100%',
        height: 'auto',
        alignItems: 'center'
      },
})