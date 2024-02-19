
import { View, Text } from "react-native";
import { RadioButton } from 'react-native-paper';
import React, { useState, useContext } from "react";
import Style from "../styles/Style";
import { UnitSelectionContext } from "./Contexts";

export default function Settings() {
    const { units, setUnits } = useContext(UnitSelectionContext);
    const [checked, setChecked] = useState(units);

    function handleRadioButtons(selectedUnit) {
        setChecked(selectedUnit);
        setUnits(selectedUnit);
    }

    return (
        <View style={Style.radiobuttonview}>
            <Text style={Style.header3}>CHOOSE UNIT</Text>
            <RadioButton.Group onValueChange={handleRadioButtons} value={checked}>
                <View style={Style.radiobutton}>
                    <Text style={Style.radiotext}>Kilometer</Text>
                    <RadioButton value="km" status={checked === 'km' ? 'checked' : 'unchecked'} />
                </View>
                <View style={Style.radiobutton}>
                    <Text>Mile</Text>
                    <RadioButton value="mile" status={checked === 'mile' ? 'checked' : 'unchecked'} />
                </View>
            </RadioButton.Group>
        </View>
    );
}