import React from 'react'
import {Pressable, StyleSheet, View} from "react-native";
import {COLORS} from "../../constants/theme";
import PlusIcon from "../../assets/icons/PlusIcon";

const styles = StyleSheet.create({
    button: {
        borderRadius: 64,
        height: 48,
        width: 48,
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
                onPress={() => props.onPress()}
                style={
                    ({pressed}) => [{
                        backgroundColor: props.disabled ? COLORS.lightGray4 : pressed ? COLORS.red : COLORS.primary,
                    },
                        styles.button]
                }
            >
                <PlusIcon
                    height={24}
                    width={24}
                    color={COLORS.white}
                ></PlusIcon>
            </Pressable>
        </View>
    )
}