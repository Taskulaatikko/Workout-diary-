import { View, Text } from "react-native";
import { RadioButton } from 'react-native-paper';
import React from "react";
import Style from "../styles/Style";
import { useFonts } from 'expo-font';
import { useState } from "react";


export default function Settings() {

    const [value, setValue] = useState('first');

    return (
        <View style={Style.radiobuttonview}>
            <Text style={Style.header3}>CHOOSE UNIT</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                <View style={Style.radiobutton}>
                    <Text style={Style.radiotext}>Kilometers</Text>
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

