import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";
import { BungeeHairline_400Regular } from "@expo-google-fonts/bungee-hairline";

export default Style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,

    },
    navview: {
        padding: 10,
    },
    header: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 30,
        fontFamily: 'Bungee',
    },
    secondHeader:{
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Bungee',
    },
    formfield: {
        margin: 5,
        backgroundColor: 'white',
        marginTop: 20,
    },
    itemText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    divider: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'black'
    },
    radiobutton: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        backgroundColor: '#ACBCAF',
        borderRadius: 30,
    },
    radiobuttonview: {
        marginTop: 40,
    },
    radiotext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        textAlign: 'center',

    },
    chip: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
        paddingLeft: 5,
        marginTop: 10,
    },
    chipview: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    messagefield: {
        margin: 5,
        backgroundColor: 'lightgray',
        padding: 10,
    },
    calendar: {
        backgroundColor: '#cdded0',
        alignItems: 'center',
        margin: 5,
        padding: 20,
        marginTop: 20,
    },
    frontbutton: {
        margin: 5,
        backgroundColor: '#ACBCAF',
        borderRadius: 30,
        marginTop: 60,
        color: '#222323',
    },
    segmbuttons: {
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: '#ACBCAF',
        borderRadius: 20,
        underlayColor:'red',
       
    },
    card: {
        backgroundColor: '#ACBCAF',
        margin: 10,
        padding: 10,
    },
    scrollview: {
        backgroundColor: '#F8F9F8',

    },
    flatlist: {
        marginBottom: (StatusBar.currentHeight || 0) + 100,
    },
    budgee: {
        fontFamily: 'BungeeHairline',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40,
    },

})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 4,
    fonts: {
        ...MD3LightTheme.fonts,
        light: 'Bungee',
    },
    colors: {
        ...MD3LightTheme.colors,
        primary: '#222323',
        SurfaceVariant: '#ACBCAF',
        tabBarActiveTintColor: '#ce5432',
        underlayColor:'red',
    }
}

//'#A294A7'

//#ACBCAF
//#BCACB9  ylemmän vastaväri