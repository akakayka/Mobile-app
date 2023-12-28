import React from 'react'
import {StyleSheet, Text, View, Pressable} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 16,
    },
    button: {
        borderRadius: 16,
        height: 51,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.white,
    },
})

export const BigButton = (props) => {
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
                    <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}