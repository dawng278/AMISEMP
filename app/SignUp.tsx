import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../firebaseConfig";
import { useRouter } from "expo-router"; // 🔥 Import useRouter từ expo-router


export default function RegisterScreen() {
  const router = useRouter(); // 🔥 Lấy router để điều hướng


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      // Lưu thông tin người dùng vào Firebase Database
      await set(ref(database, `users/${user.uid}`), {
        username,
        email,
        createdAt: Date.now(),
      });


      Alert.alert("Success", "Account created successfully!");
      router.push("/HomeScreen"); // 🔥 Chuyển đến trang messages
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };


  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
        Sign Up
      </Text>


      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          width: "100%",
          borderBottomWidth: 1,
          marginBottom: 15,
          padding: 10,
        }}
      />


      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{
          width: "100%",
          borderBottomWidth: 1,
          marginBottom: 15,
          padding: 10,
        }}
      />


      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: "100%",
          borderBottomWidth: 1,
          marginBottom: 15,
          padding: 10,
        }}
      />


      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 5,
          width: "100%",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Sign Up</Text>
      </TouchableOpacity>


      {/* 🔥 Dòng chữ "Already have an account? Login" được bọc trong <Text> */}
      <TouchableOpacity onPress={() => router.push("/SignIn")} style={{ marginTop: 20 }}>
        <Text style={{ textAlign: "center", color: "blue", fontSize: 16, fontWeight: "500" }}>
          Already have an account?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}



