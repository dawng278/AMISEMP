import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      marginVertical: 15,
      alignItems: 'center',
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    rectangle:{
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#ebebeb',
        marginVertical: 10
    },
    inrectangle:{
        paddingLeft: 15,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    group:{
        marginHorizontal: 15
    },
    justboldtext:{
        fontWeight: 'bold',
        fontSize: 16
    },
    withicons:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    withswitch:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ebebeb',
      borderRadius: 10,
      marginVertical: 5,
      paddingHorizontal: 10
    }
   
  })
  
  export default styles;
  