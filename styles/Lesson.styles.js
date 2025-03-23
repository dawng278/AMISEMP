import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inf:{
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
    plusInCircle:{
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
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
