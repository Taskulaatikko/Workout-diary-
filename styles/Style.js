import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";


export default Style = StyleSheet.create({
    play: {
        fontFamily: 'PlayfairDisplaySC-Regular',
        fontSize: 40,
        marginTop: 20,
        marginBottom: 40,
        textAlign: 'center',
    },
    calendar: {
        alignItems: 'center',
        backgroundColor: '#cdded0',
        margin: 5,
        padding: 20,
        marginTop: 20,
        borderRadius: 30,
    },
    calendarButton: {
        zIndex: -1,
    },
    card: {
        backgroundColor: '#ACBCAF',
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
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        marginTop: StatusBar.currentHeight + 5,
    },
    divider: {
        backgroundColor: 'black',
        marginBottom: 5,
        marginTop: 5,
    },
    flatlist: {
        marginBottom: (StatusBar.currentHeight || 0) +290,
    },
    formfield: {
        backgroundColor: 'white',
        margin: 5,
        marginTop: 20,
    },
    frontbutton: {
        backgroundColor: '#ACBCAF',
        borderRadius: 30,
        color: '#222323',
        margin: 5,
        marginTop: 60,
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
    messagefield: {
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 10,
    },
    navview: {
        padding: 10,
    },
    radiobutton: {
        alignItems: 'center',
        backgroundColor: '#ACBCAF',
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
    scrollview: {
        backgroundColor: '#F8F9F8',
    },
    segmbuttons: {
        backgroundColor: '#ACBCAF',
        borderRadius: 20,
        marginBottom: 30,
        marginTop: 10,
        
    },
    secondHeader: {
        fontFamily: 'play',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },

})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 4,
    fonts: {
        ...MD3LightTheme.fonts,
        light: 'play',
    },
    colors: {
        ...MD3LightTheme.colors,
        primary: '#222323',
        SurfaceVariant: '#ACBCAF',
        tabBarActiveTintColor: '#cdded0',
        underlayColor:'red',
    }
}

//'#A294A7'

//#ACBCAF
//#BCACB9  ylemmän vastaväri