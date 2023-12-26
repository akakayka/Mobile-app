import React from 'react'
import {StyleSheet, Text, View, FlatList} from "react-native";
import {Order} from "./Order";
import {render} from "react-native-web";
import {CurrentOrder} from "./CurrentOrder";
import {COLORS} from "../../constants/theme";

const styles = StyleSheet.create({
    container: {

    },
})




export const CurrentOrdersList = (props) =>
{
    return (
        <View style={props.style}>
            <FlatList
                data={props.data}
                scrollEnabled={props.scroll}
                renderItem={({item}) => (<CurrentOrder color={COLORS.white} data={item}/>)}
            />
        </View>
    )
}