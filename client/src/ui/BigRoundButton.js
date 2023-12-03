import React from 'react'
import {Image, Pressable, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import {icons} from "../../constants";
import PlusIcon from "../../assets/icons/PlusIcon";

const styles = StyleSheet.create({
    button: {
        borderRadius: 64,
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
    },
})

export const BigRoundButton = (props) => {
    return (
        <View>
            <Pressable
                onPress={() => ('text')}
                style={
                    ({pressed}) => [{
                        backgroundColor: props.disabled ? COLORS.lightGray4 : pressed ? COLORS.red : COLORS.primary,
                    },
                        styles.button,]
                }
            >
                <PlusIcon
                    height={16}
                    width={16}
                    color={COLORS.white}
                ></PlusIcon>
            </Pressable>
        </View>
    )
}