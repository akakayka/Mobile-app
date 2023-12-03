import React, {useState} from 'react'
import {StyleSheet, Text, View, Pressable} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 16,
    },
    button: {
        borderRadius: 16,
        height: 35,
        width: 203,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: COLORS.white,
    },
})

export const SmallButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {}}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? COLORS.red : COLORS.primary,
                    },
                    styles.button,
                ]}>
                    <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}