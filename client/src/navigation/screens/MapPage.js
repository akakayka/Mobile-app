import * as React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {useMyContext, useMyOrderContext, useOrderContext} from "../../../globalContext";
import MapView, {Marker} from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import safeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import getRequest from "../../../requestFunction";
import {BigButton} from "../../ui/BigButton";
import {COLORS} from "../../../constants/theme";

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    noOrderTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: COLORS.black,
    },
    noOrderText: {
        paddingHorizontal: 24,
        color: COLORS.lightGray2,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 24,
    },
})

export default function MapPage({ navigation }) {
    const { globalID, setGlobalID } = useMyContext();
    const {currentOrder, setCurrentOrder} = useOrderContext();
    const { isMyOrder, setIsMyOrder} = useMyOrderContext();

    // console.log(currentOrder)

    console.log(currentOrder);

    return (
        isMyOrder ?
                <SafeAreaView style={safeAreaViewAndroid.AndroidSafeArea}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: 56.84392816904743,
                        longitude: 60.65391892623551,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: currentOrder.latitude,
                            longitude: currentOrder.longitude,
                        }}

                    />
                    <Marker
                        coordinate={{
                            latitude: 56.84392816904743,
                            longitude: 60.65391892623551,
                        }}
                        title={'Пиццерия'}
                    />
                </MapView>
            </SafeAreaView>
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.noOrderTitle}>
                        Заказ не взят
                    </Text>
                    <Text style={styles.noOrderText}>
                        Скорее выберите заказ и порадуйте наших покупателей вкуснейшей пиццей!
                    </Text>
                    <BigButton
                        title={'Взять заказ'}
                        onPress={() => navigation.navigate('Orders')}
                    />
                </View>
    );
}