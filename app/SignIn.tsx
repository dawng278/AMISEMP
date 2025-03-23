import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles/SignIn.styles";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import React, { useState } from "react";
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Login successful!");
      router.push("/HomeScreen"); // Chuyển hướng sau khi đăng nhập thành công
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };


  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Frame166.png")} style={styles.image} />
      <Text style={{ color: "#AE00FF", fontSize: 40, letterSpacing: 10 }}>CATIDEX</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor="#949494"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#949494"
        />
      </View>


      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>


      {/* 🔥 Thêm liên kết "Register here" */}
      <TouchableOpacity onPress={() => router.push("/SignUp")}>
        <Text style={styles.registerText}>
          You don't have an account? <Text style={{ color: "#AE00FF" }}>Register here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

