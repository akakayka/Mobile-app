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
            request.onreadystatechange = e => {
                console.log(request);
                if (request.readyState !== 4) {
                    return;
                }

                if (request.status === 200) {
                    console.log('success', request.responseText);
                } else {
                    console.warn('error');
                }
            };

            request.open('GET', 'http://localhost:8000/login?username=1111&password=2222');
            // request.setRequestHeader('mode', 'no-cors')
            // request.setRequestHeader('Access-Control-Allow-Origin', '*')
            // request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            // request.setRequestHeader('Access-Control-Allow-Methods', 'GET')
            // request.setRequestHeader('Access-Control-Allow-Credentials', 'true')
            //request.withCredentials = true;
            request.send();

            fetch('http://localhost:8000/login?username=1111&password=2222',{
                 method: 'GET',
                 mode: 'no-cors',
                 //credentials: 'include'
            }).then((response) => {
                console.log(response);
            });
            //const response = await fetch('http://localhost:8000/login?username=1111&password=2222')

            let data = '0';
            if (data==='1') {
                // Успешная аутентификация, сохраните токен в AsyncStorage или другом хранилище
                console.log('ХУУУУУУУУУУУУУУУУУУУУЙ');
                props.onPress();
            } else {
                // Ошибка аутентификации, вы можете показать сообщение об ошибке
                alert(data.error || 'Ошибка аутентификации');
            }
        } catch (error) {
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
                <InputField
                    onChangeText={(text) => setUsername(text)}
                    placeholder={'Введите логин'}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>
                    Пароль
                </Text>
                <InputField
                    onChangeText={(text) => setPassword(text)}
                    placeholder={'Введите пароль'}
                />
            </View>
            <View style={styles.button}>
                <BigButton title={'Войти в аккаунт'} onPress={handleLogin}></BigButton>
            </View>
            <Text style={styles.text}>Если Вы забыли пароль или логин, обратитесь к работодателю</Text>


        </SafeAreaView>
    );
}