import { StyleSheet } from 'react-native';

export const HeroFormStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 0,
        paddingRight: 0,
    },
    btnContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        color: '#FFFFFF',
        backgroundColor: '#009688',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginLeft: 30,
        textAlign: 'center',
        borderRadius: 10
    }
})
