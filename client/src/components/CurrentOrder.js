import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import LocationIcon from "../../assets/icons/LocationIcon";
import {COLORS} from "../../constants/theme";


export const CurrentOrder = (props) => {
    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: props.color ? props.color : COLORS.primary,
            borderRadius: 16,
            padding: '5%',
            paddingRight: '5%',
            width: "100%",
            marginBottom: 16,
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
            color: props.color ? COLORS.black : COLORS.white,
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
            color: props.color ? COLORS.black : COLORS.white,
            fontWeight: "bold",
        },
        distance: {
            color: props.color ? COLORS.lightGray : COLORS.white,
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
            color: props.color ? COLORS.lightGray2 : COLORS.white,
        }
    })

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
                            color={props.color ? COLORS.primary : COLORS.white}
                        />
                        <Text style={styles.address}>{props.data.address}</Text>
                    </View>
                    <Text style={styles.distance}>{props.data.distance}</Text>
                </View>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.text}> Взят {props.data.timeFrom}</Text>
            </View>
        </View>
    )
}