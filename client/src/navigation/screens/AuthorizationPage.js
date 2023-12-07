import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {BigButton} from "../../ui/BigButton";
import {InputField} from "../../ui/InputField";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS} from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        backgroundColor: COLORS.lightGray5,
        paddingVertical: 80,
        paddingHorizontal: 24,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 32,
        color: COLORS.black,
    },
    inputName: {
        fontSize: 16,
        marginBottom: 8,
        color: COLORS.black,
    },
    inputContainer:{
        marginBottom: 24,
    },
    afterText:{

    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 24,
    },
    text: {
        fontSize: 16,
        color: COLORS.lightGray2,
    }
})



export const AuthorizationPage = (props) => {
    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
            <Text style={styles.mainTitle}>
                Войдите в аккаунт
            </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>
                    Логин
                </Text>
                <InputField
                    placeholder={'Введите логин'}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>
                    Пароль
                </Text>
                <InputField
                    placeholder={'Введите пароль'}
                />
            </View>
            <View style={styles.button}>
                <BigButton title={'Войти в аккаунт'} onPress={props.onPress}></BigButton>
            </View>
            <Text style={styles.text}>Если Вы забыли пароль или логин, обратитесь к работодателю</Text>


        </SafeAreaView>
    );
}