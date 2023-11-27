import React, {useState} from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/theme";
import {icons} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});

export const Toggle = () => {
    return (
        <View style={styles.container}>
        </View>
    );
}