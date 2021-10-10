import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        paddingTop: 20,
        paddingBottom: 60,
        alignItems: 'center'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20
      },
      categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20
      },
      categoryBox: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: '#62606B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 80,
        width: 220,
        marginTop: 10
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