// import { View, Text, Image } from "react-native";
// import React,{ useEffect } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import styles from '../styles/Error.styles'




// export default function error() {
//     const [loaded] = useFonts({
//         'Inter_28pt-ExtraBold': require('../assets/fonts/Inter_28pt-ExtraBold.ttf'),
//         'Inter_18pt-Regular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
//         'IstokWeb-Regular': require("../assets/fonts/IstokWeb-Regular.ttf"),
//       });
   
//       useEffect(() => {
//         if (loaded) {
//           SplashScreen.hideAsync();
//         }
//       }, [loaded]);
   
//       if (!loaded) {
//         return null;
//       }
// return (
//     <View
//     style={{
//         flex: 1,
//         backgroundColor: "#8D3DCB",
//         left: 0,
//         right: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }}
//     >
//         <View style={{ position: 'relative',  }}>
//     <Text style={{
//         position: 'absolute',
//         top: -70,
//         left: -10,
//         fontSize: 50,
//         fontFamily: 'Inter_18pt-Regular',
//         color: '#000000',
//         textShadowColor: '#000000',
//         textShadowOffset: { width: 1, height: 1 },
//         textShadowRadius: 2,
//     }}>OoOPSs</Text>


//     <Text style={{
//         position: 'absolute',
//         top: -50,
//         left: -20,
//         fontSize: 51,
//         fontWeight: 900,
//         fontFamily: 'Inter_28pt-ExtraBold',
//         color: '#8657A6',
//         textShadowColor: '#000000',
//         textShadowOffset: { width: 3, height: 3 },
//         textShadowRadius: 2,
//     }}>ERROR</Text>


// <Text style={{
//     position: 'absolute',
//     top: -45,
//         left: -27,
//         fontSize: 51,
//         fontWeight: 900,
//         fontFamily: 'Inter_28pt-ExtraBold',
//         color: '#C595E5',
//         textShadowColor: '#000000',
//         textShadowOffset: { width: 4, height: 4 },
//         textShadowRadius: 4,
//     }}>ERROR</Text>


//     <Image source = {require('../assets/images/Warning--Streamline-Fun-Stickers.png')}
//     style={{
//         resizeMode: 'contain',
//         top: -49,
//         left: 180,
//     }}/>


// <Text style={{
//         top: -30,
//         fontSize: 20,
//         fontWeight: 900,
//         fontFamily: 'Inter_28pt-ExtraBold',
//         color: '#000',
//         textShadowRadius: 5,
//     }}>Some thing went wrong</Text>
// </View>


//     <View >
//     <Image source={require('../assets/images/157--Streamline-The-Team.png')}
//     style={{
//         top: 30,
//         right: 10,
//     }} />


//     <Image source={require('../assets/images/4.png')}
//     style ={{
//         top: 10,
//         left: 120,
//     }} />
// </View>


//     <View style={{position: 'relative', justifyContent:'center',paddingHorizontal: 90,
//     }} >
//         <Image source={require('../assets/images/Smiley--Streamline-Fun-Stickers.png')}
//         style={{
//             top: 20,
//             right: 80,
//         }} />


//         <Text style={{
//             position: 'absolute',
//             fontSize: 20,
//             fontFamily: 'IstokWeb-Regular',
//             top:50,
//             left:140,
//         }}>please, wait for {'\n'} developers :(</Text>
//     </View>
//     </View>
// );
// }


