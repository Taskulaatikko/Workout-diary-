import { Divider, Paragraph, Title } from "react-native-paper";
import { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext } from "./Contexts";
import { useContext } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Style from "../styles/Style";
import { Chip } from 'react-native-paper';
import moment from 'moment';
import * as React from 'react';
import { Card, Icon} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";


    let skilength = 0;
    let walklength = 0;
    let swimlength = 0;



export default function MessagesView() {

    console.log("MESSAGESVIEW");



    const { messages } = useContext(DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext);

    return (

        <View style={Style.container}>
            <View style={Style.chipview}>
                <Chip icon="ski" style={Style.chip}  >tulos: {skilength}</Chip>
                <Chip icon="walk" style={Style.chip} >tulos: {walklength}</Chip>
                <Chip icon="swim" style={Style.chip} >tulos: {swimlength}</Chip>
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
        walklength = walklength + parseInt(message.distance);

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
                           style={{backgroundColor:'black'}} />
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