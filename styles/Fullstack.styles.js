import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    top: 90,
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
