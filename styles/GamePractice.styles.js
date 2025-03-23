import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
    },
    inf: {
        width: 85,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        marginVertical: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    plusInCircle: {
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SquareButtons: {
        width: 91,
        height: 82,
        backgroundColor: '#E9A6FF',
        borderRadius: 10,
        alignItems: 'center',
       
    },
    flexRow:{
        flexDirection:'row',
        height: 100,
        justifyContent: 'space-around',
        alignItems:'center',
        width:500,
    },
    retangleRectangle: {
        marginTop: 7,
        width: 72,
        height: 64,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#8D8D8D',
        alignItems:'center'
    },
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


