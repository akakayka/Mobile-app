import * as React from 'react';
import { View, Text } from 'react-native';
import {Comment} from "../../components/Comment";

export default function OrdersPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Comment text={'Пиццу у двери положите) ещё лифт кстати не работает. Хорошего дня! Здоровья, счастья, любви.'}/>
        </View>
    );
}