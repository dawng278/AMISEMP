import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import styles from '../styles/FrontEndCourse.styles';

export default function FrontEnd() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Anton': require('../assets/fonts/AntonSC-Regular.ttf'),
    'AnticDidone': require('../assets/fonts/AnticDidone-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <View />; // Hoặc hiển thị một loading indicator
  }

  return (
    <ImageBackground source={require('../assets/images/bgc2.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.frontEnd}>FRONT{'\n'}END</Text>
        <Text style={styles.sub}>generate your{'\n'}imaginations{'\n'}become reality</Text>
        <Image source={require('../assets/images/4D.png')} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => router.push("/FrontEnd")}> {/* Thay đổi ở đây */}
          <Text style={styles.text}>Learn Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
