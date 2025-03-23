import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/SignIn_SignUp.styles";
import { useRouter } from "expo-router";

export default function login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => router.push("/GetStarted")}>
          <Image source={require("../assets/images/Vector.png")} />
        </TouchableOpacity>
      </View>

      <Image source={require("../assets/images/Frame166.png")} />
      <Text style={{ color: "#AE00FF", fontSize: 40, letterSpacing: 10 }}>
        CATIDEX
      </Text>
      <Text style={{ color: "#949494", fontSize: 12, fontFamily: "Inter" }}>
        generate your world
      </Text>
      <Image source={require("../assets/images/Group132.png")} />
      <View style={styles.btnLink}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => router.push("/SignUp")}
        >
          <Text style={styles.googleText}>Continue Login/Register</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By continuing, you agree to out Terms and{"\n"} Privacy Policy
        </Text>
      </View>
    </View>
  );
}
