import React, {useState} from 'react'
import {StyleSheet, Text, View, Pressable} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import PhoneIcon from "../../assets/icons/PhoneIcon";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 16,
    },
    button: {
        borderRadius: 16,
        height: 35,
        width: 249,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: COLORS.white,
        marginLeft: 8,
    },
})

export const SmallButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={props.onPress}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? COLORS.red : COLORS.primary,
                    },
                    styles.button,
                ]}>
                    <PhoneIcon
                        width={16}
                        height={16}
                        color={COLORS.white}
                    />
                    <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}