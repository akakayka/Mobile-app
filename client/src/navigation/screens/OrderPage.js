import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable} from 'react-native';
import {CurrentOrder} from "../../components/CurrentOrder";
import {COLORS} from "../../../constants/theme";
import AttentionIcon from "../../../assets/icons/AttentionIcon";
import {Comment} from "../../components/Comment";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";
import {BigButton} from "../../ui/BigButton";
import {useEffect, useState} from "react";
import {useMyContext, useMyOrderContext, useOrderContext} from "../../../globalContext";
import getRequest from "../../../requestFunction";

const styles = StyleSheet.create({
    container: {
    },
    scroll: {
        paddingHorizontal: '6%',
        paddingTop: 20,
    },
    titleContainer: {
        marginBottom: 16,
    },
    mainTitle: {
        color: COLORS.black,
        fontSize: 24,
        fontWeight: "bold",
    },
    timeBlock: {
        marginVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    time: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
        borderRadius: 16,
    },
    timeTitle: {
        fontSize: 20,
        color: COLORS.black,
    },
    timeDetails: {
        fontSize: 16,
        color: COLORS.lightGray2,
    },
    attention: {
        color: COLORS.lightGray2,
        fontSize: 16,
        marginBottom: 32,
    },
    title: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    payment: {

    },
    paymentDetailsBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    paymentStatusBlock: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: COLORS.lightRed,
        borderRadius: 16,

    },
    paymentStatus: {
        marginRight: 8,
        color: COLORS.darkRed,
        fontSize: 16,
        fontWeight: "bold",
    },
    icon: {
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 2,
    },
    paymentDetails: {
        color: '#C14C53B2',
        fontSize: 16,
    },
    paymentSumBlock: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
    },
    paymentSum: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    paymentInfo: {
        color: '#FFFFFFB2',
        fontSize: 16,
    },
    user: {
        marginBottom: 32,
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 8,
    },
    cancelBlock: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginBottom: 56,
    },
    cancel: {
        fontSize: 16,
        color: COLORS.lightGray2,
    }
})

async function orderFinish(globalID, setIsMyOrder){
    setIsMyOrder(false)
    await getRequest(`finish-order?id=${globalID}`)
}

async function orderCancel(globalID, setIsMyOrder){
    setIsMyOrder(false)
    await getRequest(`cancel-order?id=${globalID}`)
}

export default function OrderPage({ navigation }) {
    const { isMyOrder, setIsMyOrder} = useMyOrderContext();
    const { globalID, setGlobalID } = useMyContext();
    const {currentOrder, setCurrentOrder} = useOrderContext();
    console.log(currentOrder)



        return ( isMyOrder ?
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={{justifyContent: "center"}}
                endFillColor={COLORS.primary}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.mainTitle}>
                        Текущий заказ
                    </Text>
                </View>
                <CurrentOrder
                    data={currentOrder}
                />
                <View style={styles.timeBlock}>
                    <View style={styles.time}>
                        <Text style={styles.timeTitle}>
                            2 ч 30 мин
                        </Text>
                        <Text style={styles.timeDetails}>
                            В доставке
                        </Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeTitle}>
                            18:59
                        </Text>
                        <Text style={styles.timeDetails}>
                            Срок доставки
                        </Text>
                    </View>
                </View>
                <Text style={styles.attention}>
                    Если не успеваете доставить заказ, сообщите об этом покупателю
                </Text>
                <View style={styles.payment}>
                    <Text style={styles.title}>
                        Оплата
                    </Text>
                    <View style={styles.paymentDetailsBlock}>
                        <View style={styles.paymentStatusBlock}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={styles.paymentStatus}>
                                    Не оплачен
                                </Text>
                                <View style={styles.icon}>
                                    <AttentionIcon
                                        width={20}
                                        height={20}
                                        color={COLORS.darkRed}
                                    />
                                </View>
                            </View>
                            <Text style={styles.paymentDetails}>
                                Наличные
                            </Text>
                        </View>
                        <View style={styles.paymentSumBlock}>
                            <Text style={styles.paymentSum}>
                                12 500 ₽
                            </Text>
                            <Text style={styles.paymentInfo}>
                                Сумма заказа
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.attention}>
                        Прочтите комментарий от покупателя
                    </Text>
                </View>
                <Text style={styles.title}>
                    Покупатель
                </Text>
                <View style={styles.user}>
                    <Comment
                        name={'Елизавета'}
                        phone={'+7 950 228-13-37'}
                        text={'Пиццу у двери положите) ещё лифт кстати не работает. Хорошего дня! Здоровья, счастья, любви.'}
                    />
                </View>
                <View style={styles.button}>
                    <BigButton onPress={() => orderFinish(currentOrder.number, setIsMyOrder)}
                        title={'Завершить доставку'}
                    />
                </View>
                <Pressable onPress={() => orderCancel(currentOrder.number, setIsMyOrder)}>
                    <View style={styles.cancelBlock}>
                        <Text style={styles.cancel}>
                            Отказаться от заказа
                        </Text>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView> :
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text

                style={{ fontSize: 26, fontWeight: 'bold' }}>Возьми заказ</Text>
        </View>);
}