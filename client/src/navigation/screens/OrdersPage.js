import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {OrderList} from "../../components/OrderList"
import {Comment} from "../../components/Comment";
import SafeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS} from "../../../constants/theme";


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
    },
    {
        number: '134',
        address: 'Ленина 128',
        distance: '0.8',
        timeFrom: '17:34',
        timeTo: '18:59'
    },
    {
        number: '134',
        address: 'Ленина 128',
        distance: '0.8',
        timeFrom: '17:34',
        timeTo: '18:59'
    },
    {
        number: '134',
        address: 'Ленина 128',
        distance: '0.8',
        timeFrom: '17:34',
        timeTo: '18:59'
    },
]

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.lightGray5,
        paddingVertical: 80,
        paddingHorizontal: 24,
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 8,
    },
    orders: {
        height: '50%'
    },
    desc: {
        fontSize: 16,
        marginBottom: 8,
    }
})


export default function OrdersPage({ navigation }) {
    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container] }>
            <Text style={styles.header}>Доступные заказы</Text>
            <Text style={styles.desc}>Всего доступно {data.length} заказа</Text>
            <OrderList
                data={data}
                scroll={true}
            >

            </OrderList>
        </SafeAreaView>
    );
}