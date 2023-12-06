import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {BigButton} from "../../ui/BigButton";
import {SmallRoundButton} from "../../ui/SmallRoundButton";
import {InputField} from "../../ui/InputField";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS, FONTS} from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        justifyContent: "center"
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 32
    },
    inputName: {
        fontSize: 16,
        marginBottom: 8,
    },
    inputContainer:{
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 24
    },
    afterText:{

    }

})



export const AuthorizationPage = () => {
    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
            <Text style={styles.mainTitle}>
                Войдите в аккаунт
            </Text>
            <View style={styles.inputContainer}>
            <Text style={styles.inputName}>
                Логин
            </Text>
            <InputField></InputField>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputName}>
                Пароль
            </Text>
            <InputField></InputField>
            </View>
            <BigButton title={'Войти'}></BigButton>
            <Text style={FONTS.body3}>Если Вы забыли пароль или логин, обратитесь к работодателю</Text>


        </SafeAreaView>
    );
}