import { useContext, useState } from "react";
import { Button, Modal, Text, TextInput, SegmentedButtons, useTheme } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext} from "./Contexts";
import { Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Style from '../styles/Style';


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
    const theme = useTheme();
    const pressedColor = '#cdded0';

    const {units, setUnits} = useContext(UnitSelectionContext);
    //const [units, setUnits] = useState('km');

   //setUnits('km');


    function dateSelected(day) {
        setVisible(false);
        setDate(day);
    }


    

    function addMessage() {

        if (distance < 0 || duration < 0) {
            console.error("Distance and duration must be non-negative.");
            return;
        }


        setMessages(prev => [...prev, { distance, duration, SelectedDate: date.dateString, selectionButton, units}]);
    }

    return (
        <View style={Style.navview}>
            <Text style={Style.header}>ADD WORKOUT</Text>
            <View>
                <Text style={Style.secondHeader}>Choose exercice</Text>
                <SegmentedButtons
                    value={selectionButton}
                    onValueChange={setSelectionButton}
                    buttons={buttons}
                    style={Style.segmbuttons}
                    theme={{ colors: { pressedColor } }} // Apply custom color for pressed state
                />
                <TextInput style={Style.formfield} label={'Distance'} value={distance} keyboardType="numeric" onChangeText={setDistance} />
                <TextInput style={Style.formfield} label={'Duration'} value={duration} keyboardType="numeric" onChangeText={setDuration} />
                <View style={Style.calendar}>
                    <Modal 
                        visible={visible} 
                        transparent={true} 
                        onDismiss={() => setVisible(false)} contentContainerStyle={Style.modalContainer}                 
                    >                     
                        <Calendar onDayPress={dateSelected} />  
                    </Modal>

                    <Pressable onPress={() => setVisible(true)} style={Style.calendarButton}>
                        <Text >{date ? date.dateString : 'Selected date' } </Text>
                    </Pressable>
                </View>
                <Button style={Style.frontbutton} mode="outlined" onPress={addMessage}>Add workout</Button>
            </View>
        </View>
    );
}

