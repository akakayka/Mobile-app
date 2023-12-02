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
        height: 24,
        width: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 12,
        width: 12,
    },
    icon: {
        height: 10,
        width: 10,
    },
})

export const SmallRoundButton = (props) => {
    const plusIcon = icons.PlusIcon;

    return (
        <View>
            <TouchableHighlight onPress={() => ('text')}>
                <View style={styles.button}>
                    <View style={styles.container}>
                        <PlusIcon
                        style={styles.icon}>

                        </PlusIcon>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}