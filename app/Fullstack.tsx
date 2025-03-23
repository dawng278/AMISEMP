import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "../styles/Fullstack.styles";

export default function SecondPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Gradient Background */}
      <LinearGradient
        colors={["#87CEEB", "#4682B4", "#1E90FF", "#000080"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <ImageBackground
        source={require("./../assets/images/blur1.png")}
        style={{ flex: 1.1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={{}}>
            <Image source={require("./../assets/images/full.png")} />
            <Image source={require("./../assets/images/stack.png")} />
          </View>
          <View
            style={{
              padding: 20,
              marginHorizontal: 100,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "#140C1D",
                fontFamily: "AnticDidone",
              }}
            >
              Code Your Future – Conquer Fullstack Development Today
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: "rgba(90, 118, 228, 0.5)",
            padding: 20,
            marginHorizontal: 100,
            bottom: 100,
            borderWidth: 1,
            borderColor: "rgba(26, 18, 255, 0.85)",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                color: "#2D2A7C",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Learn Now <AntDesign name="right" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
