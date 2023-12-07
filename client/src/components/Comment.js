import React from "react";
import {View, Text, Image, StyleSheet, Alert} from "react-native";
import {SmallButton} from "../ui/SmallButton";
import {COLORS} from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: '100%',
        borderRadius: 16,
        padding: 16,
    },
    user: {
        flexDirection: "row",
        marginBottom: 16,
    },
    image: {

    },
    userData: {
        marginLeft: 16,
    },
    phone: {
        color: COLORS.lightGray,
        fontSize: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    title: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: "bold",
    },
    text: {
        color: COLORS.lightGray,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 24,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
    }
})

export const Comment = (props) => {

    const onPress = () => {}

    return (
        <View style={{...styles.container, ...props.style}}>
            <View style={styles.user}>
                <View style={styles.image}>
                    <Image source={props.image} />
                </View>
                <View style={styles.userData}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.phone}>{props.phone}</Text>
                </View>
            </View>
            <View>
                {props.text ? <Text style={styles.title}>Комментарий</Text> : ''}
                <Text style={styles.text}>{props.text ? props.text : 'Комментарий отсутствует'}</Text>
            </View>
            <View style={styles.button}>
                <SmallButton
                    title={'Позвонить покупателю'}
                    onPress={onPress}
                />
            </View>
        </View>
    )
}