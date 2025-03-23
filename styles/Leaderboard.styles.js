import { StyleSheet } from "react-native";
// Styles
const styles = StyleSheet.create({
    mainContainer:{
      marginTop:70,
    },
    listContent: {
      paddingVertical: 10,
    },
    container: {
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    itemContainer: {
      width: 320,
      height: 50,
      alignItems: "center",
      borderRadius: 50,
      marginVertical: 5,
    },
    innerContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 15,
    },
    rank: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      padding: 5,
      fontFamily: "NATS-Regular",
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
    name: {
      flex: 1,
      fontSize: 19,
      color: "#000",
      marginLeft: 10,
      fontFamily: 'NATS-Regular',
    },
    points: {
      fontSize: 19,
      color: "#000",
      fontFamily: 'NATS-Regular',
    },
  });
  
  export default styles;
  
  