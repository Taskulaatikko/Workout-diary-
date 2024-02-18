import { View, Text } from "react-native";
import { RadioButton } from 'react-native-paper';
import React from "react";
import Style from "../styles/Style";
import { useState, useContext} from "react";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext } from "./Contexts";


export default function Settings() {

    //const [value, setValue] = useState('first');

    const { units, setUnits } = useContext(UnitSelectionContext);
    const [checked, setChecked] = useState(units);


    function handleRadioButtons(selectedUnit) {
        setChecked(selectedUnit);
        setUnits(selectedUnit);
        console.log("Selected unit: " + selectedUnit);
        console.log("Selected unit: " + units);
    }

    return (
        <View style={Style.radiobuttonview}>
            <Text style={Style.header3}>CHOOSE UNIT</Text>
            <RadioButton.Group onValueChange={newValue => handleRadioButtons(newValue)} value={checked} >
                <View style={Style.radiobutton}>
                    <Text style={Style.radiotext}>Kilometers</Text>
                    <RadioButton value="km" 
                    status={checked === 'km' ? 'checked' : 'unchecked'}
                    //onValueChange={() => handleRadioButtons('km')}
                    />
                </View>
                <View style={Style.radiobutton}>
                    <Text >Miles</Text>
                    <RadioButton value="mile" 
                    status={checked === 'mile' ? 'checked' : 'unchecked'}
                    //onValueChange={() => handleRadioButtons('mile')}
                    />
                </View>
            </RadioButton.Group>
        </View>
    );
}

