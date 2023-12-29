import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView, Pressable} from 'react-native';
import SafeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import {useEffect, useState} from "react";
import {CurrentOrder} from "../../components/CurrentOrder";
import {OrderList} from "../../components/OrderList";
import ArrowIcon from "../../../assets/icons/Arrowicon";
import {COLORS} from "../../../constants/theme";
import {useDeliverymanContext} from "../../../UserContext";
import {useMyContext, useMyOrderContext, useOrderContext} from "../../../globalContext";
import getRequest from "../../../requestFunction";
import AttentionIcon from "../../../assets/icons/AttentionIcon";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    },
    headerContainer : {
        marginTop: 32,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
    },
    currentOrderContainer: {
        marginVertical: 32,
    },
    currentOrderHeader: {
        fontSize: 24,
        marginBottom: 16,
    },
    buttonContainer: {
        marginTop: 16,
        marginBottom: 32,
    },
    button: {
        display: "flex",
        flexDirection: "row",
    },
    buttonText: {
        color: COLORS.lightGray2,
        fontSize: 14,
        marginRight: 4,
    },
    noOrders: {
        fontSize: 16,
        color: COLORS.lightGray2,
        lineHeight: 24,
    },
    noCurrentOrderContainer: {
        padding: 16,
        backgroundColor: COLORS.primary,
        borderRadius: 16,
        height: 112,
    },
    noCurrentOrderTitleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    noCurrentOrderTitle: {
        color: COLORS.white,
        marginLeft: 8,
        fontSize: 20,
    },
    noCurrentOrderText: {
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 24,
    }
})

export default function HomePage({ navigation }) {
    const { userInfo, setUserInfo } = useDeliverymanContext();
    const { isMyOrder, setIsMyOrder} = useMyOrderContext()
    const [list, setList] = useState([]);
    const {currentOrder, setCurrentOrder} = useOrderContext();
    const { globalID, setGlobalID } = useMyContext();
    console.log(currentOrder)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest('available-orders');
                const data = await response.json();
                setList(data);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        fetchData();}, []);



    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest(`get-my-order?id=${globalID}`);
                const data = await response.json();
                console.log(data);
                setOrder({
                    number: data[0].pk,
                    address: data[0].fields.adres,
                    distance: data[0].fields.dop_adres,
                    timeTo: data[0].fields.time_limit,
                    price: data[0].fields.cost,
                    typeOfPay: data[0].fields.type_pay,
                    comment: data[0].fields.coment,
                    tel: data[0].fields.client_number,
                    name: data[0].fields.name
                });
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        fetchData();
    }, []);*/

    const transformedList = list.map(element => ({
        number: element.pk,
        address: element.fields.adres,
    }));

    const [ordersData, setOrdersData] = useState([
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
    ])

    return (
        <ScrollView>
            <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Добро пожаловать, {userInfo.name} 👋
                    </Text>
                </View>
                <View style={styles.currentOrderContainer}>
                    <Text style={styles.currentOrderHeader}>
                        Текущий заказ
                    </Text>
                    {
                        isMyOrder ?
                            <CurrentOrder
                                data={currentOrder}
                            />
                            :
                            <View style={styles.noCurrentOrderContainer}>
                                <View style={styles.noCurrentOrderTitleContainer}>
                                    <AttentionIcon
                                        color={COLORS.white}
                                        height={24}
                                        width={24}
                                    />
                                    <Text style={styles.noCurrentOrderTitle}>
                                        Заказ не взят
                                    </Text>
                                </View>
                                <Text style={styles.noCurrentOrderText}>
                                    Пожалуйста, выберите заказ из списка доступных заказов
                                </Text>
                            </View>
                    }
                </View>
                <View>
                    <Text style={styles.currentOrderHeader}>
                        Доступные заказы
                    </Text>

                    <OrderList
                        data={transformedList.slice(0, Math.min(3, ordersData.length))}
                        scroll={false}
                    />
                </View>
                {transformedList.length > 0?
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('Orders')}
                        >
                            <Text style={styles.buttonText}>
                                Показать больше заказов
                            </Text>
                            <ArrowIcon height={20} width={20} color={COLORS.lightGray2} />

                        </Pressable>
                    </View>
                    : <Text style={styles.noOrders}>Доступные заказы не найдены</Text> }
            </SafeAreaView>
        </ScrollView>
    );
}
