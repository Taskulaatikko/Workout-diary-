/*import { Divider, Paragraph, Text, Title, Card, Icon, Chip } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext,UnitSelectionContext } from "./Contexts";
import { useContext, useState, useEffect  } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Style from "../styles/Style";
import moment from 'moment';
import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";




export default function MessagesView() {

    const [skilength, setSkilength] = useState(0);
    const [walklength, setWalklength] = useState(0);
    const [swimlength, setSwimlength] = useState(0);
    const { messages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext);
    
    //const [context, setContext] = useContext(UnitSelectionContext);

    const value = useContext(UnitSelectionContext);

    console.log("MIKA:"+value);

    useEffect(() => {
        console.log('useEffect')
        sum();
    }, [messages]);

    function sum() {
        let ski = 0;
        let walk = 0;
        let swim = 0;

        messages.forEach(message => {
            //console.log("MIKA:"+message.UnitSelectionContext)
            switch (message.selectionButton) {
                case "ski":
                    ski += parseInt(message.distance);
                    break;
                case "walk":
                    walk += parseInt(message.distance);
                    break;
                case "swim":
                    swim += parseInt(message.distance);
                    break;
                default:
                    break;
            }
        });

        setSkilength(ski);
        setWalklength(walk);
        setSwimlength(swim);
    }
    return (

        <View style={Style.container}>
            <Text style={Style.header2}>Workout procress</Text>
            <View style={Style.chipview}>
                <Chip icon="ski" style={Style.chip}  >{skilength}</Chip>
                <Chip icon="walk" style={Style.chip} >{walklength}</Chip>
                <Chip icon="swim" style={Style.chip} >{swimlength}</Chip>
            </View>
            <SafeAreaView>
                <FlatList
                    style={Style.flatlist}
                    data={messages.slice().reverse()}
                    renderItem={({ item }) => <Item message={item} />}
                />
            </SafeAreaView>
        </View>

    );



}
function Item({ message }) {
    console.log('datetime');
    const date = moment(message.SelectedDate, "YYYY-MM-DD").format('DD.MM.YYYY');
    const iconi = message.selectionButton;


    return (
        <View>
            <ScrollView >
                <Card style={Style.card}>
                    <Card.Content>
                        <Icon
                            source={iconi}
                            size={35}
                        />
                        <Divider
                            style={Style.divider} />
                        <Title>{date}</Title>
                        <Paragraph>{message.distance} Kilometers</Paragraph>
                        <Paragraph>{message.duration} Min</Paragraph>

                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );

}
*/
import { Divider, Paragraph, Text, Title, Card, Icon, Chip } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext } from "./Contexts";
import { useContext, useState, useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Style from "../styles/Style";
import moment from 'moment';

export default function MessagesView() {
    const { messages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext);
    const { units } = useContext(UnitSelectionContext);
    const [skilength, setSkilength] = useState(0);
    const [walklength, setWalklength] = useState(0);
    const [swimlength, setSwimlength] = useState(0);

    useEffect(() => {
        sum();
    }, [messages, units]);

    function sum() {
        let ski = 0;
        let walk = 0;
        let swim = 0;

        messages.forEach(message => {
            const distance = parseInt(message.distance);
            switch (message.selectionButton) {
                case "ski":
                    ski += distance;
                    break;
                case "walk":
                    walk += distance;
                    break;
                case "swim":
                    swim += distance;
                    break;
                default:
                    break;
            }
        });

        setSkilength(ski);
        setWalklength(walk);
        setSwimlength(swim);
    }

    function convertToMiles(kilometers) {
        return (kilometers / 1.609344).toFixed(2); // Conversion from kilometers to miles
    }

    return (
        <View style={Style.container}>
            <Text style={Style.header2}>Workout process</Text>
            <View style={Style.chipview}>
                <Chip icon="ski" style={Style.chip}>{units === 'mile' ? convertToMiles(skilength) : skilength}</Chip>
                <Chip icon="walk" style={Style.chip}>{units === 'mile' ? convertToMiles(walklength) : walklength}</Chip>
                <Chip icon="swim" style={Style.chip}>{units === 'mile' ? convertToMiles(swimlength) : swimlength}</Chip>
            </View>
            <FlatList
                style={Style.flatlist}
                data={messages.slice().reverse()}
                renderItem={({ item }) => <Item message={item}/>}
            />
        </View>
    );
}

function Item({ message, units }) {
    const date = moment(message.SelectedDate, "YYYY-MM-DD").format('DD.MM.YYYY');
    const iconi = message.selectionButton;
    const distance = units === 'mile' ? convertToMiles(message.distance) : message.distance;

    return (
        <View>
            <ScrollView>
                <Card style={Style.card}>
                    <Card.Content>
                        <Icon source={iconi} size={35} />
                        <Divider style={Style.divider} />
                        <Title>{date}</Title>
                        <Paragraph>{distance} {units === 'mile' ? 'Miles' : 'Kilometers'}</Paragraph>
                        <Paragraph>{message.duration} Min</Paragraph>        
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
}
