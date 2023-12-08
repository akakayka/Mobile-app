import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import LocationIcon from "../../assets/icons/LocationIcon";
import {COLORS} from "../../constants/theme";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 16,
        padding: 16,
        width: '100%',
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: COLORS.white,
        marginBottom: 8,
    },
    addressBlock: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 8,
    },
    address: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: "bold",
    },
    distance: {
        color: COLORS.white,
        marginLeft: 34,
        marginBottom: 8,
    },
    infoBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        flexDirection: "row",
    },
    attention: {
        marginRight: 5,
    },
    text: {
        color: COLORS.white,
    }
})

export const CurrentOrder = (props) => {
    return (
        <View style={{...styles.mainContainer, ...props.style}}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Заказ № {props.data.number}</Text>
                    <View style={styles.addressBlock}>
                        <LocationIcon
                            style={styles.icon}
                            width={24}
                            height={24}
                            color={COLORS.white}
                        />
                        <Text style={styles.address}>{props.data.address}</Text>
                    </View>
                    <Text style={styles.distance}>{props.data.distance} км</Text>
                </View>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.text}> Взят {props.data.timeFrom}</Text>
            </View>
        </View>
    )
}