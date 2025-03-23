import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


    background: {
      flex: 1,
      justifyContent: 'center',
    },
  
  
    container: {
      alignItems: 'center', // Căn chỉnh nội dung sang trái
      paddingHorizontal: 20, // Thêm padding ngang
    },
  
  
    frontEnd: {
      fontFamily:'Anton',
      textAlign:'left',
      fontSize: 70,
      resizeMode: 'contain',
      position: 'absolute',
      top: -270,
      left: 50,
      lineHeight:100,
    },
  
  
    sub: {
      fontFamily:'AnticDidone',
      textAlign:'left',
      resizeMode: 'contain',
      position: 'absolute',
      fontSize: 14, // Thêm kích thước font
      top:-160,
      right: 140,
    },
  
  
    image:{
  width:500,
  height:390,
  resizeMode: 'contain',
  position: 'absolute',
  right: -73, // Tương đương marginRight: -50
  top: -160, // Tương đương marginTop: -60
    },
    button: {
      width: 140,
      height: 50,
      borderWidth: 1.5,
      borderColor: "#535353",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      shadowOpacity: 0.9,
      shadowRadius: 106,
      bottom: -300,
    },
    text: {
      color: "#535353",
      fontSize: 18,
      fontWeight: "500",
    },
  });
  
  export default styles;

  