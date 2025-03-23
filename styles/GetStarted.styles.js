import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  txtTitleUp: {
    fontSize: 50,
    color: "#FFF",
    textAlign: "center",
    right: '25%',
    bottom: '10%',
  },
  txtTitleDown: {
    fontSize: 50,
    color: "#FFF",
    textAlign: "left",
    paddingHorizontal: '5%',
  },
  txtBold: {
    fontWeight: "900",
  },
  txtNormal: {
    fontWeight: "400",
  },
  content: {
    flexDirection: "row",
    justifyContent: 'space-between',
    flex: 1,
  },
  imageWrapper: {
    bottom: '40%',
  },
  imageOverlay: {
    width: '100%',
    alignSelf: "center",
    bottom: '20%',
  },
  btnWrapper: {
    alignSelf: "center",
    bottom: '5%',
  },
  btnImage: {
    resizeMode: "contain",
  },
});

export default styles;