import React from "react";
import {Text, View, StyleSheet, SafeAreaView, Pressable} from "react-native";
import safeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import BackArrowIcon from "../../../assets/icons/BackArrowicon";
import {COLORS} from "../../../constants/theme";
import {OrderList} from "../../components/OrderList";
import {CurrentOrdersList} from "../../components/CurrentOrdersList";


export const OrdersHistory = ({navigation}, props) => {

    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            paddingHorizontal: 24,
            backgroundColor: COLORS.lightGray5,
        },
        backButtonText: {
            color: COLORS.black,
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 8,
        },
        backButton: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        orderList: {
            marginTop: 56,
            marginBottom: 20,
            height: '87%'
        }
    })

    const goBack = () => {
        navigation.navigate('Back')
    }

    const data = [
        {
            number: '054',
            address: 'Комсомольская 70',
            distance: '2 подъезд, 15 этаж, 85 кв.',
            timeFrom: '16:20',
            timeTo: '18:59'
        },
        {
            number: '054',
            address: 'Комсомольская 70',
            distance: '2 подъезд, 15 этаж, 85 кв.',
            timeFrom: '16:20',
            timeTo: '18:59'
        },
        {
            number: '054',
            address: 'Комсомольская 70',
            distance: '2 подъезд, 15 этаж, 85 кв.',
            timeFrom: '16:20',
            timeTo: '18:59'
        },
        {
            number: '054',
            address: 'Комсомольская 70',
            distance: '2 подъезд, 15 этаж, 85 кв.',
            timeFrom: '16:20',
            timeTo: '18:59'
        },
        {
            number: '054',
            address: 'Комсомольская 70',
            distance: '2 подъезд, 15 этаж, 85 кв.',
            timeFrom: '16:20',
            timeTo: '18:59'
        }]

    return (
        <SafeAreaView style={[styles.container, safeAreaViewAndroid.AndroidSafeArea]}>
            <Pressable style={styles.backButton} onPress={goBack}>
                <BackArrowIcon
                    height={24}
                    width={24}
                    color={COLORS.black}
                />
                <Text style={styles.backButtonText}>
                    История заказов
                </Text>
            </Pressable>

            <CurrentOrdersList
                style={styles.orderList}
                data={data}
                scroll={true}
            />
        </SafeAreaView>
    );
}