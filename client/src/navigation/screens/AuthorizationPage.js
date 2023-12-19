import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {BigButton} from "../../ui/BigButton";
import {InputField} from "../../ui/InputField";
import SafeViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS} from "../../../constants/theme";
import {fetchText} from "react-native-svg";

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

    const handleLogin = () => {
        try {
            console.log(username);
            console.log(password);
            let headers = new Headers();

            headers.append('Content-Type', 'text/html');
            headers.append('Accept', 'text/html');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Headers', 'Content-type');
            headers.append('Access-Control-Allow-Methods', 'GET');
            headers.append('Access-Control-Max-Age', '7');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('Cross-Origin-Opener-Policy', 'same-origin');
            const request = new XMLHttpRequest();
            // request.onreadystatechange = e => {
            //     console.log(request);
            //     if (request.readyState !== 4) {
            //         return;
            //     }
            //
            //     if (request.status === 200) {
            //         console.log('success', request.responseText);
            //     } else {
            //         console.warn('error');
            //     }
            // };

            request.open('GET', `http://127.0.0.1:8000/login?username=${username}&password=${password}`);

            request.send();
            let data;
            console.log(request)

            request.onreadystatechange = () => {
                let data = request.responseText;


            if (data==='1') {
                // Успешная аутентификация, сохраните токен в AsyncStorage или другом хранилище
                props.onPress();
            } else if(data==='0' || data==='-1') {
                // Ошибка аутентификации, вы можете показать сообщение об ошибке
                alert(data.error || 'Ошибка аутентификации');
            }
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