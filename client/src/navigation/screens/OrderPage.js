import * as React from 'react';
import { View, Text } from 'react-native';
import {Order} from "../../components/Order";

export default function OrderPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Order />
        </View>
    );
}