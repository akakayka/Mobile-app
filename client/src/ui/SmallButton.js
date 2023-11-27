import React from 'react'
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {Button} from 'react-native'
import {COLORS, SIZES} from "../../constants/theme";
import {icons} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    button: {
        borderRadius: 16,
        backgroundColor: COLORS.primary,
        height: 35,
        width: 203,
        alignItems: "center",
        justifyContent: "center",
    },
})

export const SmallButton = (props) => {
    return (
        <View>
            <TouchableHighlight onPress={() => ('text')}>
                <View style={styles.button}>
                    <View style={styles.container}>
                        <Text>Small Button</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}