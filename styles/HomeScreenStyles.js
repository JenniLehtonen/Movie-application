import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1F1C2C',
        padding: 20,
        alignItems: 'center'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20
      },
      headers: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
      },
      categoryItem: {
        height: 105,
        width: 105,
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        overflow: 'hidden'
      },
      categoryNameContainer: {
        marginTop: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        opacity: 0.8,
        borderRadius: 10,
        width: '80%',
        height: '30%'
      },
      resultImage: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginRight:10,
      },
})