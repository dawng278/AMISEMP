import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    scrollContainer: {
      flexGrow: 1,
      alignItems: "center",
      paddingBottom: 20,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",  // Đảm bảo các phần tử thẳng hàng
      justifyContent: "space-between",
      width: "90%",
      marginTop: 20,
    },
    vector: {
      width: 25,
      height: 25,
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      flex: 1, // Đẩy tiêu đề ra giữa
      textAlign: "center", // Đảm bảo căn giữa văn bản
    },
    option: {
      width: 20,
      height: 20,
    },
    img: {
      width: 300,
      height: 200,
      borderRadius: 20,
      borderWidth: 1.5,
      borderColor: "#fff",
      backgroundColor: "#f6f3ff",
      marginTop: 10,
    },
    contentWrapper: {
      alignSelf: "flex-start",
      marginLeft: 30,
      marginTop: 20,
    },
    content: {
      fontSize: 20,
      fontWeight: "bold",
    },
    by: {
      fontSize: 11,
      fontWeight: "bold",
    },
    catidex: {
      color: "#C445FF",
    },
    rate: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      marginLeft: 30,
      marginTop: 10,
    },
    icon: {
      width: 25,
      height: 25,
      marginRight: 5,
    },
    rateText: {
      fontSize: 15,
      fontWeight: "bold",
      marginRight: 15,
    },
    tab: {
      width: "80%",
      flexDirection: "row",
      backgroundColor: "#F4F1FF",
      borderRadius: 10,
      padding: 5,
      marginTop: 20,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 10,
      borderRadius: 10,
    },
    activeTab: {
      backgroundColor: "#6A42F4",
    },
    inactiveTab: {
      backgroundColor: "transparent",
    },
    tabText: {
      fontWeight: "bold",
    },
    activeText: {
      color: "white",
    },
    inactiveText: {
      color: "black",
    },
    listContainer: {
      width: "90%",
      maxHeight: 300,
      // backgroundColor: "#F4F1FF",
      borderRadius: 10,
      marginTop: 20,
      paddingVertical: 10,
    },
    scrollList: {
      maxHeight: 280, // Định giới hạn chiều cao cuộn
    },
    lessonItem: {
      // backgroundColor: "#E8E4FF",
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      marginHorizontal: 10,
    },
    lessonContent: {
      flexDirection: "row", // Đặt icon và chữ nằm ngang
      alignItems: "center", // Căn giữa icon với chữ theo chiều dọc
    },
    lessonIcon: {
      marginRight: 10, // Tạo khoảng cách giữa icon và text
    },
    lessonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    lessonItemActive: {
      backgroundColor: "#D1C4E9",
    },
    description: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    descText: {
      fontSize: 16,
      textAlign: "left",
    },
    start: {
      flexDirection: 'row',
      alignItems: 'center',  // Căn giữa theo chiều dọc
      justifyContent: 'space-between', // Tạo khoảng cách giữa 2 nút
      width: "80%", // Đảm bảo vừa với nội dung
      marginTop: 20, // Đẩy xuống dưới một chút
    },
    save: {
      width: 50,
      height: 45,
      borderRadius: 15,
      backgroundColor: '#FFEFDA',
      justifyContent: 'center', // Căn giữa icon theo chiều dọc
      alignItems: 'center', // Căn giữa icon theo chiều ngang
      borderWidth: 0, // Loại bỏ viền
    },
    saveActive:{
      backgroundColor: "#FF9D13",
      tintColor:'#fff',
    },
    bookSave: {
      width: 25,
      height: 25,
    },
    startNow: {
      flex: 1, // Để nó chiếm hết không gian còn lại
      height: 45,
      borderRadius: 15,
      backgroundColor: '#6A42F4',
      justifyContent: 'center', // Căn giữa chữ theo chiều dọc
      alignItems: 'center', // Căn giữa chữ theo chiều ngang
      marginLeft: 10, // Tạo khoảng cách giữa 2 nút
    },
    startNowText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
    lessonItemActive: {
      // backgroundColor: "#E3F2FD",
    },
  });
  
  export default styles;
  
  