import React from 'react'
import {Pressable, StyleSheet, View} from "react-native";
import {COLORS} from "../../constants/theme";
import PlusIcon from "../../assets/icons/PlusIcon";

const styles = StyleSheet.create({
    button: {
        borderRadius: 64,
        height: 64,
        width: 64,
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
                    height={32}
                    width={32}
                    color={COLORS.white}
                ></PlusIcon>
            </Pressable>
        </View>
    )
}