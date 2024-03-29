import { useContext, useState } from "react";
import { Button, Modal, Text, TextInput, SegmentedButtons } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext } from "./Contexts";
import { Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Style from '../styles/Style';


const buttons = [
    { label: 'Ski', value: "ski", icon: 'ski' },
    { label: 'Walk', value: "walk", icon: 'walk' },
    { label: 'Swim', value: "swim", icon: 'swim' },
]


export default function UserView() {
    const { setMessages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const [selectionButton, setSelectionButton] = useState(buttons[0].value);


    function dateSelected(day) {
        setVisible(false);
        setDate(day);
    }


    function addMessage() {

        if (!distance || !duration) {
            console.error('Distance and duration are required.');
            return;
        }

        if (distance < 0 || duration < 0) {
            console.error('Distance and duration must be non-negative.');
            return;
        }

        if (!date) {
            console.error("Please select a date.");
            return;
        }

        setMessages(prev => [...prev, { distance, duration, SelectedDate: date.dateString, selectionButton, UnitSelectionContext }]);
    }

    return (
        <View style={Style.navview}>
            <Text style={Style.header}>ADD WORKOUT</Text>
            <View>
                <Text style={Style.secondHeader}>Choose exercise</Text>
                <SegmentedButtons
                    value={selectionButton}
                    onValueChange={setSelectionButton}
                    buttons={buttons}
                    style={{ backgroundColor: '#aec5c5', margin: 5, padding: 5, borderRadius: 30 }}
                />
                <TextInput style={Style.formfield} label={'Distance'} value={distance} keyboardType="numeric" onChangeText={setDistance} />
                <TextInput style={Style.formfield} label={'Duration'} value={duration} keyboardType="numeric" onChangeText={setDuration} />
                <View style={Style.calendar}>
                    <Modal
                        visible={visible}
                        transparent={true}
                        onDismiss={() => setVisible(false)}>
                        <Calendar onDayPress={dateSelected}
                            firstDay={1}
                            style={Style.calendarIn}
                            theme={{
                                'stylesheet.calendar.header': {
                                    dayTextAtIndex6: {
                                        color: 'red'
                                    },
                                    dayTextAtIndex5: {
                                        color: 'red'
                                    },
                                    dayTextAtIndex4: {
                                        color: 'black'
                                    },
                                    dayTextAtIndex3: {
                                        color: 'black'
                                    },
                                    dayTextAtIndex2: {
                                        color: 'black'
                                    },
                                    dayTextAtIndex1: {
                                        color: 'black'
                                    },
                                    dayTextAtIndex0: {
                                        color: 'black'
                                    },
                                }
                            }} />
                    </Modal>
                    <Pressable onPress={() => setVisible(true)} style={Style.calendarButton}>
                        <Text >{date ? date.dateString : 'Select date'} </Text>
                    </Pressable>
                </View>
                <Button style={Style.frontbutton} mode="outlined" onPress={addMessage}>ADD WORKOUT</Button>
            </View>
        </View>
    );
}
