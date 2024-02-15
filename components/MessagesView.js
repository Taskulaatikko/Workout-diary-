import { Divider, Paragraph, Text, Title } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext } from "./Contexts";
import { useContext } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Style from "../styles/Style";
import { Chip } from 'react-native-paper';
import moment from 'moment';
import * as React from 'react';
import { Card, Icon } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useState } from "react";



export default function MessagesView() {

    const [skilength, setSkilength] = useState(0);
    const [walklength, setWalklength] = useState(0);
    const [swimlength, setSwimlength] = useState(0);

    const { messages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext);

    useEffect(() => {
        sum();
    }, [messages]);

    function sum() {
        let ski = 0;
        let walk = 0;
        let swim = 0;

        messages.forEach(message => {
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
                    data={messages}
                    renderItem={({ item }) => <Item message={item} />}
                />
            </SafeAreaView>
        </View>

    );



}
function Item({ message }) {
    const date = moment(message.SelectedDate, "YYYY-MM-DD").format('DD.MM.YYYY');
    console.log("Item");
    const iconi = message.selectionButton;

    //walklenght = walklenght + parseInt(message.distance);
    //console.log("walk" + walklenght);
    //sum(iconi,message.distance)


    /*if (iconi == "ski") {
        skilenght = skilenght + parseInt(message.distance);
    }
    if (iconi == "swim") {
        swimlenght = swimlenght + parseInt(message.distance);
    }*/





    return (
        <View style={Style.scrollview}>
            <ScrollView >
                <Card style={Style.card}>
                    <Card.Content>
                        <Icon
                            source={iconi}
                            size={35}
                        />
                        <Divider
                            style={{ backgroundColor: '#cdded0', marginTop: 10, marginBottom: 10, padding: 1}} />
                        <Title>{date}</Title>
                        <Paragraph>{message.distance} Kilometers</Paragraph>
                        <Paragraph>{message.duration} Min</Paragraph>

                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );

}

/*function sum (a, b) {

    if (a == "walk") {
        walklenght = walklenght + b;
        console.log("WALK: "+b);
    }


}*/