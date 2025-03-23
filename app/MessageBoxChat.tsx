import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { database, auth } from "./../firebaseConfig"; // Import Firebase
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

// Kiểu dữ liệu của tin nhắn
type Message = {
  id: string;
  text: string;
  timestamp: number;
  userId: string;
  userEmail?: string; // Email của người gửi (lấy từ Firebase Auth)
};

export default function Messages() {
  const [message, setMessage] = useState<string>(""); // Chỉ định kiểu dữ liệu cho message
  const [messages, setMessages] = useState<Message[]>([]);
  const currentUser = auth.currentUser; // Lấy thông tin người dùng hiện tại
  const router = useRouter();

  // Lấy tin nhắn từ Firebase theo thời gian thực
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Firebase data:", data); // Log dữ liệu nhận được từ Firebase

      if (data) {
        const loadedMessages: Message[] = Object.keys(data)
          .map((key) => ({
            id: key,
            text: data[key].text,
            timestamp: data[key].timestamp,
            userId: data[key].userId,
            userEmail: data[key].userEmail || "Ẩn danh", // Nếu không có email, hiển thị "Ẩn danh"
          }))
          .sort((a, b) => a.timestamp - b.timestamp); // Sắp xếp theo thời gian tăng dần
        setMessages(loadedMessages);
      } else {
        setMessages([]);
      }
    });
  }, []);

  // Gửi tin nhắn lên Firebase
  const sendMessage = () => {
    if (!currentUser) {
      alert("Bạn cần đăng nhập để gửi tin nhắn.");
      return;
    }

    if (message.trim().length > 0) {
      push(ref(database, "messages"), {
        text: message,
        timestamp: Date.now(),
        userId: currentUser.uid, // Lưu UID của người dùng
        userEmail: currentUser.email, // Lưu email của người dùng
      });

      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable onPress={() => router.push("/Message")}>
            <AntDesign
              style={{ padding: 10 }}
              name="left"
              size={24}
              color="black"
            />
          </Pressable>
          <View style={styles.avatar} />
          <Text style={styles.headerText}>Message</Text>
        </View>
        <AntDesign
          style={styles.headerRight}
          name="exclamationcircle"
          size={24}
          color="black"
        />
      </View>

      {/* Danh sách tin nhắn */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80, // Điều chỉnh để phù hợp với chiều cao của nav bar
        }}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.userId === currentUser?.uid
                ? styles.myMessage
                : styles.otherMessage,
            ]}
          >
            <Text style={[styles.messageSender]}>{item.userEmail}</Text>
            <Text
              style={[
                styles.messageText,
                item.userId === currentUser?.uid
                  ? { color: "#fff" }
                  : { color: "#000" },
              ]}
            >
              {item.text}
            </Text>
            <Text style={styles.timestamp}>
              {new Date(item.timestamp).toLocaleTimeString()}
            </Text>
          </View>
        )}
      />

      {/* Ô nhập tin nhắn */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.chatView}>
          <View style={styles.chatContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nhập tin nhắn..."
              placeholderTextColor="#888"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <AntDesign name="arrowright" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f8f8f8",
    overflow: "hidden",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 0,
  },
  avatar: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerText: { paddingLeft: 15, fontWeight: "500", fontSize: 16 },
  headerRight: { position: "absolute", right: 10 },

  // Danh sách tin nhắn
  messageContainer: {
    maxWidth: "75%",
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  myMessage: {
    backgroundColor: "#B682F7",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: "#EDEDED",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  messageSender: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  messageText: { fontSize: 16, color: "#000" },
  timestamp: { fontSize: 12, color: "#555", textAlign: "right", marginTop: 5 },

  // Ô nhập tin nhắn
  chatView: {
    flexDirection: "row",
    alignItems: "center",
    height: 69,
    width: "100%",
    backgroundColor: "#f5f5f5",
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
  },
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    margin: 10,
    flex: 1,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
  sendButton: { backgroundColor: "#B682F7", borderRadius: 20, padding: 10 },
});
