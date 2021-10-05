import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1F1C2C',
        padding: 20
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20
      },
      resultTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
      },
      resultBox: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: '#62606B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 80,
        width: 200,
        marginTop: 10
      },
      resultButtonStyle: {
        backgroundColor: '#4C4956',
        height: 35,
        width: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
      },
      resultImageInfo: {
        height: 15,
        width: 15
      },
})