import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#000",
    paddingHorizontal: 20,
    gap: '5%',
  },
  Logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  btnLink: {
    alignItems: "center",
    marginTop: 20, // Tạo khoảng cách giữa nút và hình
  },
  terms: {
    fontSize: 12,
    color: "#949494",
    textAlign: "center",
    marginTop: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  googleText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },

});
