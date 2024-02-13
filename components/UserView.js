import { useContext, useState } from "react";
import { Button, Modal, Text, TextInput, SegmentedButtons } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext } from "./Contexts";
import { Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";
import Style, { MyTheme } from '../styles/Style';
import { MD3LightTheme } from "react-native-paper";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const buttons = [
    { label: 'Ski', value: "ski", icon: 'ski' },
    { label: 'Walk', value: "walk", icon: 'walk' },
    { label: 'Swim', value: "swim", icon: 'swim' },
]


export default function UserView() {

    const { setMessages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const [selectionButton, setSelectionButton] = useState(buttons[0].value);
   
    //moment.locale('fi'); 



    function dateSelected(day) {
        setVisible(false);
        setDate(day);
    }





    function addMessage() {

        console.log("LÄHETÄ");

        setMessages(prev => [...prev, { distance, duration, SelectedDate: date.dateString, selectionButton }]);
        //setDuration('');
        //setDistance('');
        //setDate('');

    }

    return (
        <View style={Style.navview}>
            <Text style={Style.budgee}>Add workout</Text>
            <View>
                <Text style={Style.secondHeader}>Choose exercice</Text>

                <SegmentedButtons
                    value={selectionButton}
                    onValueChange={setSelectionButton}
                    buttons={buttons}
                    style={Style.segmbuttons}
                />

                <TextInput style={Style.formfield} label={'Distance'} value={distance} keyboardType="numeric" onChangeText={setDistance} />
                <TextInput style={Style.formfield} label={'Duration'} value={duration} keyboardType="numeric" onChangeText={setDuration} />

                <View style={Style.calendar}>

                    <Modal visible={visible} transparent={true} >
                        <Calendar onDayPress={dateSelected} />
                    </Modal>

                    <Pressable onPress={() => setVisible(true)}>
                        <Text >{date ? date.dateString : 'Selected date'} </Text>
                    </Pressable>

                </View>
                <Button style={Style.frontbutton} mode="outlined" onPress={addMessage}>Add workout</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    budgee: {
        fontFamily: 'BungeeHairline',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
})