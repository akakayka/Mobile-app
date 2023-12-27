import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView, Pressable} from 'react-native';
import SafeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import {useEffect, useState} from "react";
import {CurrentOrder} from "../../components/CurrentOrder";
import {OrderList} from "../../components/OrderList";
import ArrowIcon from "../../../assets/icons/Arrowicon";
import {COLORS} from "../../../constants/theme";
import {useDeliverymanContext} from "../../../UserContext";
import {useMyOrderContext} from "../../../globalContext";

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
    }
})

export default function HomePage({ navigation }) {
    const { userInfo, setUserInfo } = useDeliverymanContext();
    const { isMyOrder, setIsMyOrder} = useMyOrderContext()
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/available-orders', { method: 'GET' });
                const data = await response.json();
                setList(data);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        fetchData();}, []);

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
                        <CurrentOrder
                            data={{
                                number: 1,
                                address: 'ffsdfs',
                                distance: 'adada',
                                timeFrom: '11:11'
                            }}
                        />
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
            </SafeAreaView>
        </ScrollView>
    );
}