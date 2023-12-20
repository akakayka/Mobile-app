import React from 'react'
import {StyleSheet, Text, View, FlatList} from "react-native";
import {Order} from "./Order";
import {render} from "react-native-web";

const styles = StyleSheet.create({
    container: {

    },
})




export const OrderList = (props) =>
{
    return (
        <View style={props.style}>
            <FlatList
                data={props.data}
                scrollEnabled={props.scroll}
                renderItem={({item}) => (<Order data={item}/>)}
            />
        </View>
    )
}