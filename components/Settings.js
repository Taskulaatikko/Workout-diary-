import { View, Text } from "react-native";
import { RadioButton } from 'react-native-paper';
import React from "react";
import Style from "../styles/Style";


export default function Settings(options, onPress) {

    const [value, setValue] = React.useState('first');

    return (
        <View style={Style.radiobuttonview}>
            <Text style={Style.budgee}>Choose unit</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                <View style={Style.radiobutton}>
                    <Text >Kilometers</Text>
                    <RadioButton value="km" />
                </View>
                <View style={Style.radiobutton}>
                    <Text >Miles</Text>
                    <RadioButton value="mile" />
                </View>
            </RadioButton.Group>
        </View>
    );
}

