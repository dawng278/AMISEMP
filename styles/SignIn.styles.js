import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    gap: "10%",
  },
  arrow: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "80%",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#AE00FF",
    color: "#fff",
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: "#AE00FF",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  registerText: {
    color: "#949494",
    fontSize: 14,
    marginTop: 10,
  },
  terms: {
    fontSize: 12,
    color: "#949494",
    textAlign: "center",
    marginTop: 10,
  },
  image: { // 🔥 Thêm thuộc tính image
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  registerText: {
    fontSize: 14,
    color: "#FFFFFF",  // Đổi màu nếu bị ẩn
    textAlign: "center",
  },
});


