import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        alignItems: 'center',
        padding: 20
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20
      },
      searchStyle: {
        marginBottom: 10,
        fontSize: 18,
        color: '#98979A',
      },
      
      //Search field
      searchContainer: {
        justifyContent: 'flex-start',
        padding: 20,
        width: '100%',
        height: 'auto'
      },
      searchFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50
      },
      searchField: {
        borderRadius: 25,
        height: 45,
        padding: 10,
        width: '80%',
        backgroundColor: 'white',
        fontSize: 18
      },
    
      //Search button
      buttonStyle: {
        marginLeft: 10,
        backgroundColor: '#FDAC33',
        height: 45,
        width: 45,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        height: 25,
        width: 25
      },
    
      //Results
      resultContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 15,
        width: '100%'
      },
      resultBox: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: '#62606B',
        padding: 10,
        height: 100,
      },
      resultTextView: {
        width: '65%',
        flexDirection: 'column',
        paddingLeft: 8
      },
      resultImageView: {
        width: '25%',
        flexDirection: 'column'
      },
      resultButtonsView: {
        width: '10%',
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
      resultAddButtonView: {
        marginBottom: 10
      },
      resultInfoButtonView: {
        justifyContent: 'flex-end'
      },
      resultTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      },
      resultDetails: {
        fontSize: 18,
        color: '#98979A'
      },
      resultImage: {
        height: 80,
        width: 80,
        borderRadius: 20
      },
      resultImageAdd: {
        height: 20,
        width: 20
      },
      resultImageInfo: {
        height: 15,
        width: 15
      },
      resultButtonStyle: {
        backgroundColor: '#4C4956',
        height: 35,
        width: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }
});