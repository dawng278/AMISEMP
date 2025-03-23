import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute', // Thay đổi từ 'fixed' sang 'absolute'
        bottom: 0, // Đặt navbar ở dưới cùng màn hình
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 999,
        elevation: 5, // Cho Android
      },
      navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 30,
      },
      activeNavItem: {
        backgroundColor: '#e8eaf6',
        flexDirection: 'row',
        paddingHorizontal: 20,
      },
      navText: {
        marginLeft: 8,
        color: '#777',
        fontWeight: '500',
      },
      activeNavText: {
        color: '#000',
        fontWeight: '900',
      },
})

export default styles;