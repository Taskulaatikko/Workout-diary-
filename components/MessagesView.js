import { Divider, Paragraph, Text, Title, Card, Icon, Chip } from "react-native-paper";
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
