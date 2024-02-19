
import { Divider, Paragraph, Text, Title, Card, Icon, Chip } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext } from "./Contexts";
import { useContext, useState, useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Style from "../styles/Style";
import moment from 'moment';


export default function MessagesView() {
    const { messages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext);
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
        return (kilometers / 1.609344).toFixed(2);
    }


    return (


        <View style={Style.container}>
            <Text style={Style.header2}>Workout progress</Text>
            <View style={Style.chipview}>
                <Chip icon="ski" style={Style.chip}>{units === 'mile' ? convertToMiles(skilength) : skilength} {units === 'mile' ? 'mi' : 'km'}</Chip>
                <Chip icon="walk" style={Style.chip}>{units === 'mile' ? convertToMiles(walklength) : walklength} {units === 'mile' ? 'mi' : 'km'}</Chip>
                <Chip icon="swim" style={Style.chip}>{units === 'mile' ? convertToMiles(swimlength) : swimlength} {units === 'mile' ? 'mi' : 'km'}</Chip>
            </View>
            <FlatList
                style={Style.flatlist}
                data={messages.slice().reverse()}
                renderItem={({ item }) => <Item message={item} />}
            />
        </View>
    );
}

function Item({ message }) {

    function convertToMiles(kilometers) {
        return (kilometers / 1.609344).toFixed(2);
    }

    const { units } = useContext(UnitSelectionContext);
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
                        <Paragraph style={Style.Paragraph}>Distance: {distance} {units === 'mile' ? 'Mile' : 'Kilometer'}</Paragraph>
                        <Paragraph style={Style.Paragraph}>Duration: {message.duration} Minute</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
}
