import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import LocationIcon from "../../assets/icons/LocationIcon";
import {COLORS} from "../../constants/theme";
import AttentionIcon from "../../assets/icons/AttentionIcon";
import {SmallRoundButton} from "../ui/SmallRoundButton";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        width: 312,
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
        color: COLORS.lightGray,
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
    },
    distance: {
        color: COLORS.lightGray,
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
        color: COLORS.lightGray2,
    }
})

export const Order = (props) => {
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
                            color={COLORS.primary}
                        />
                        <Text style={styles.address}>{props.data.address}</Text>
                    </View>
                    <Text style={styles.distance}>{props.data.distance} км</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <SmallRoundButton />
                </View>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.text}>Принят {props.data.timeFrom}</Text>
                <View style={styles.info}>
                    <AttentionIcon
                        style={styles.attention}
                        width={18}
                        height={18}
                        color={COLORS.lightGray2}
                    />
                    <Text style={styles.text}>Доставить до {props.data.timeTo}</Text>
                </View>
            </View>
        </View>
    )
}