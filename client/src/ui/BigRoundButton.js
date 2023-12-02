import React from 'react'
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import {icons} from "../../constants";
import PlusIcon from "../../assets/icons/PlusIcon";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    button: {
        borderRadius: 64,
        backgroundColor: COLORS.primary,
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 16,
        width: 16,
    }
})

export const BigRoundButton = (props) => {
    return (
        <View>
            <TouchableHighlight onPress={() => ('text')}>
                <View style={styles.button}>
                    <View style={styles.container}>
                        <PlusIcon></PlusIcon>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}