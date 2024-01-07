import React, {useEffect, useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {BigButton} from "../../ui/BigButton";
import {InputField} from "../../ui/InputField";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS} from "../../../constants/theme";
import {fetchText} from "react-native-svg";
import {useMyContext, useMyOrderContext, useOrderContext} from "../../../globalContext";
import {useDeliverymanContext} from "../../../UserContext";
import getRequest from "../../../requestFunction";

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
    const {isMyOrder, setIsMyOrder} = useMyOrderContext();
    const { globalID, setGlobalID } = useMyContext();
    const { userInfo, setUserInfo } = useDeliverymanContext();
    const {currentOrder, setCurrentOrder} = useOrderContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [borderStyle, onChangeBorder] = useState({
        borderColor: COLORS.lightGray,
        borderWidth: 0,
    })

    const styles_input = StyleSheet.create({
        input: {
            height: 51,
            fontSize: 16,
            borderWidth: borderStyle.borderWidth,
            borderColor: borderStyle.borderColor,
            padding: 10,
            borderRadius: 16,
            backgroundColor: COLORS.white,
            alignItems: "flex-start",
            paddingHorizontal: 15,
            paddingVertical: 0,
            color: COLORS.lightGray,
        },
    });

    const onFocus = () => {
        onChangeBorder({
            borderColor: COLORS.primary,
            borderWidth: 2,
        })
    }

    const onBlur = () => {
        onChangeBorder({
            borderColor: COLORS.lightGray,
            borderWidth: 0,
        })
    }

    const handleLogin = async () => {
        try {
            console.log(username);
            console.log(password);

            const res = await getRequest(`login?username=${username}&password=${password}`);

            let data = await res.json()


            if (data > 0) {
                // Успешная аутентификация, сохраните токен в AsyncStorage или другом хранилище
                // data - IID .
                setGlobalID(data)
                console.log(globalID)
                try {
                    const profileResponse = await getRequest(`get-profile-info?id=${data}`);
                    const profileData = await profileResponse.json();
                    setUserInfo(profileData);
                    if(profileData.order !== -1)
                    {
                        const a = await getRequest(`get-my-order?id=${data}`);
                        const b = await a.json();
                        console.log(data);
                        const c = {number: b[0].pk,
                            address: b[0].fields.adres,
                            distance: b[0].fields.dop_adres,
                            timeTo: b[0].fields.time_limit,
                            price: b[0].fields.cost,
                            typeOfPay: b[0].fields.type_pay,
                            comment: b[0].fields.coment,
                            tel: b[0].fields.client_number,
                            name: b[0].fields.name}
                        setCurrentOrder(c);
                        setIsMyOrder(true)

                    }
                    console.log(profileData.order)
                } catch (error) {
                    console.error('Ошибка запроса профиля:', error);
                }
                props.onPress();
            } else if (data === -1) {
                // Ошибка аутентификации, вы можете показать сообщение об ошибке
                alert(data.error || 'Ошибка аутентификации');
            }
        }
        catch (error) {
            console.error('Ошибка запроса:', error);
        }
    };

    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
            <Text style={styles.mainTitle}>
                Войдите в аккаунт
            </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>
                    Логин
                </Text>
                <TextInput
                    style={styles_input.input}
                    onChangeText={(text) => setUsername(text)}
                    placeholder={"Введите логин"}
                    placeholderTextColor={COLORS.lightGray3}
                    value={username}
                    focusable={true}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>
                    Пароль
                </Text>
                <TextInput
                    style={styles_input.input}
                    onChangeText={(text) => setPassword(text)}
                    placeholder={"Введите пароль"}
                    placeholderTextColor={COLORS.lightGray3}
                    value={password}
                    focusable={true}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </View>
            <View style={styles.button}>
                <BigButton title={'Войти в аккаунт'} onPress={handleLogin}></BigButton>
            </View>
            <Text style={styles.text}>Если Вы забыли пароль или логин, обратитесь к работодателю</Text>


        </SafeAreaView>
    );
}