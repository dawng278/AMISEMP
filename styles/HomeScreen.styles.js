import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    options:{
        width: 130,
        height: 145,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        margin: 10,
    },
    optiontitle:{
        position: 'absolute',
        bottom: 5,
        fontSize: 16,
        fontWeight: 'medium'
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