// import { View, Text, Image } from "react-native";
// import React, { useEffect } from "react";
// import { TouchableOpacity } from "react-native";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";


// export default function backend() {
//   const [loaded] = useFonts({
//     "InriaSans-Regular": require("../assets/fonts/InriaSans-Regular.ttf"),
//     "AnticDidone-Regular": require("../assets/fonts/AnticDidone-Regular.ttf"),
//   });


//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);


//   if (!loaded) {
//     return null;
//   }


//   return (
//     <View>
//       <View style={{ position: "relative" }}>
//         <Image
//           source={require("../assets/images/image 46.png")}
//           style={{
//             position: "absolute",
//             backgroundColor: "#000",
//             width: 360,
//           }}
//         />


//         <Image
//           source={require("../assets/images/Shape-9-t 2.png")}
//           style={{
//             position: "absolute",
//             top: 150,
//             width: 360,
//             height: 625,
//           }}
//         />
//       </View>
       
//       <View style={{position:'relative', paddingHorizontal:122}} >
//       <Image
//         source={require("../assets/images/BACKEND.png")}
//         style={{
//           position:'absolute',
//           top: 150,
//           left: 160,
//           opacity: 1,
//         }}
//       />


//       <Text
//         style={{
//           position:'absolute',
//           color: "#fff",
//           fontFamily: "AnticDidone-Regular",
//           textAlign: "right",
//           top: 240,
//           right: 165,


//         }}
//       >
//         Backend mastery- {"\n"} The art of making{"\n"} things work
//       </Text>
//       </View>


//       <Image
//         source={require("../assets/images/Gradient - 121.png")}
//         style={{
//           top: -60,
//         }}
//       />


//       <View style={{ position: "relative", marginTop: 200, }}>
//         <TouchableOpacity
//           style={{
//             position: "absolute",
//             backgroundColor: "transparent",
//             paddingVertical: 25,
//             paddingHorizontal: 75,
//             borderRadius: 10,
//             top: -450,
//             alignSelf: "center",
//             borderWidth: 1.5,
//             borderColor: "#fff",
//           }}
//           onPress={() => alert("Không có gì cả!")}
//         >
//           <Text
//             style={{
//               position: "absolute",
//               color: "#fff",
//               fontFamily: "InriaSans-Regular",
//               fontSize: 18,
//               textAlign: "center",
//               top: 12.5,
//               left: 25,
//             }}
//           >
//             Learn Now
//           </Text>


//           <Image
//             source={require("../assets/images/Vector.png")}
//             style={{
//               position: "absolute",
//               top: 16,
//               opacity: 1,
//               left: 115,
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
