import React, { useCallback, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Order } from './Order';

const styles = StyleSheet.create({
    container: {},
});

export const OrderList = (props) => {
    const [orderVisibility, setOrderVisibility] = useState({});
    const [forceUpdate, setForceUpdate] = useState(0);

    const hideOrder = (orderId) => {
        setOrderVisibility((prevVisibility) => ({
            ...prevVisibility,
            [orderId]: false,
        }));
        setForceUpdate((prev) => prev + 1);
    };

    const renderItem = useCallback(
        ({ item }) =>
            orderVisibility[item.number] !== false ? (
                <Order key={item.number} data={item} onHideOrder={() => hideOrder(item.number)} />
            ) : null,
        [orderVisibility]
    );

    return (
        <View style={props.style}>
            <FlatList
                data={props.data}
                scrollEnabled={props.scroll}
                renderItem={renderItem}
                keyExtractor={(item) => item.number.toString()}
                extraData={forceUpdate}
            />
        </View>
    );
};
