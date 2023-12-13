import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {OrderList} from "../../components/OrderList"
import {Comment} from "../../components/Comment";
import SafeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";


const data = [
    {
        number: '054',
        address: 'Комсомольская 70',
        distance: '3',
        timeFrom: '16:20',
        timeTo: '18:59'
    },
    {
        number: '134',
        address: 'Ленина 128',
        distance: '0.8',
        timeFrom: '17:34',
        timeTo: '18:59'
    }
]

const styles = StyleSheet.create({})


export default function OrdersPage({ navigation }) {
    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
            <Text>Доступные заказы</Text>
            <Text>Всего доступно {data.length} заказа</Text>
            <OrderList data ={data}>

            </OrderList>
        </SafeAreaView>
    );
}