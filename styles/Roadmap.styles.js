import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    course: {
        width: '100%',
        height: 95,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    groupcourse:{
        width: '95%',
        marginTop: 30,
        marginBottom: 10
    },
    coursetitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    forCourseImage:{
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    decribtion:{
        fontSize: 18,
        fontWeight: 'bold'  
    },
    forDecribtion:{
        justifyContent: 'center'
    }
})

export default styles;
