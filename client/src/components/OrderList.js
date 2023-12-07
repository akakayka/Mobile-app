import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Order} from "./Order";

const styles = StyleSheet.create({
    container: {

    },
})

export const OrderList = (props) => {

    const list = props.data;

    renderItem = (item) => (
        <View>
            <Order
                data={item}
            />
        </View>
    )

    return (
        <View>
            {list.map((item) => this.renderItem(item))}
        </View>
    )
}