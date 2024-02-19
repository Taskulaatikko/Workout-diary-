import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";


export default Style = StyleSheet.create({
    calendar: {
        alignItems: 'center',
        backgroundColor: '#aec5c5',
        borderRadius: 30,
        margin: 5,
        marginTop: 20,
        padding: 20,
    },
    calendarButton: {
        zIndex: -1,
    },
    calendarIn: {
        backgroundColor: '#aec5c5',
    },
    card: {
        backgroundColor: '#aec5c5',
        margin: 10,
        padding: 10,
    },
    chip: {
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 5,
        padding: 5,
        paddingLeft: 5,
    },
    chipview: {
        backgroundColor: '#aec5c5',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingTop: 5,
    },
    container: {
        marginTop: StatusBar.currentHeight + 5,
    },
    divider: {
        backgroundColor: '#f6f6f6',
        marginBottom: 10,
        marginTop: 10,
        padding: 1,
    },
    flatlist: {
        marginBottom: (StatusBar.currentHeight || 0) + 140,
    },
    formfield: {
        backgroundColor: 'white',
        margin: 5,
        marginTop: 20,
    },
    frontbutton: {
        backgroundColor: '#aec5c5',
        borderRadius: 30,
        marginTop: 60,
        padding: 6,
        zIndex: -1,
    },
    header: {
        fontFamily: 'play',
        fontSize: 40,
        margin: 5,
        marginBottom: 50,
        marginTop: 55,
        textAlign: 'center',
    },
    header2: {
        fontFamily: 'play',
        fontSize: 35,
        margin: 5,
        marginBottom: 30,
        marginTop: 30,
        textAlign: 'center',
    },
    header3: {
        fontFamily: 'play',
        fontSize: 35,
        margin: 5,
        marginBottom: 50,
        marginTop: 30,
        textAlign: 'center',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    navview: {
        padding: 10,
    },
    Paragraph: {
        fontSize: 17,
    },
    radiobutton: {
        alignItems: 'center',
        backgroundColor: '#aec5c5',
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
    },
    radiobuttonview: {
        marginTop: 40,
    },
    radiotext: {
        fontSize: 16,
        textAlign: 'center',
    },
    segmbuttons: {
        borderRadius: 20,
        marginBottom: 30,
        marginTop: 10,
    },
    secondHeader: {
        fontFamily: 'play',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    play: {
        fontFamily: 'PlayfairDisplaySC-Regular',
        fontSize: 40,
        marginBottom: 40,
        marginTop: 20,
        textAlign: 'center',
    },

})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 4,
    colors: {
        ...MD3LightTheme.colors,
        primary: 'black',
        secondaryContainer: '#f6f6f6',
        outline: '#aec5c5',
    }
}

