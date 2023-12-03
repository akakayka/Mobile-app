import React from 'react'
import {Image, Pressable, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import {icons} from "../../constants";
import PlusIcon from "../../assets/icons/PlusIcon";

const styles = StyleSheet.create({
    button: {
        borderRadius: 64,
        height: 24,
        width: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 12,
        width: 12,
    },
})

export const SmallRoundButton = (props) => {
    return (
        <View>
            <Pressable
                onPress={() => ('text')}
                style={
                    ({pressed}) => [{
                        backgroundColor: props.disabled ? COLORS.lightGray4 : pressed ? COLORS.red : COLORS.primary,
                    },
                    styles.button]
                }
            >
                <PlusIcon
                    height={12}
                    width={12}
                    color={COLORS.white}
                ></PlusIcon>
            </Pressable>
        </View>
    )
}