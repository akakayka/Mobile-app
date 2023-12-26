import React, {useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from "react-native";
import SafeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS} from "../../../constants/theme";
import BackArrowIcon from "../../../assets/icons/BackArrowicon";
import {BigButton} from "../../ui/BigButton";


export const Settings = ({navigation}, props) => {
    const [name, onChangeName] = useState('');
    const [surname, onChangeSurname] = useState('');
    const [middlename, onChangeMiddlename] = useState('');

    const [nameBorderStyle, onChangeNameBorder] = useState({
        borderColor: COLORS.lightGray,
        borderWidth: 0,
    })

    const [surnameBorderStyle, onChangeSurnameBorder] = useState({
        borderColor: COLORS.lightGray,
        borderWidth: 0,
    })

    const [middlenameBorderStyle, onChangeMiddlenameBorder] = useState({
        borderColor: COLORS.lightGray,
        borderWidth: 0,
    })

    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            paddingHorizontal: 24,
            backgroundColor: COLORS.lightGray5,
        },
        backButtonText: {
            color: COLORS.black,
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 8,
        },
        backButton: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        inputContainer: {
            marginTop: 32,
        },
        input: {
            height: 51,
            fontSize: 16,

            padding: 10,
            borderRadius: 16,
            backgroundColor: COLORS.white,
            alignItems: "flex-start",
            paddingHorizontal: 15,
            paddingVertical: 0,
            color: COLORS.lightGray,
        },
        name: {
            borderWidth: nameBorderStyle.borderWidth,
            borderColor: nameBorderStyle.borderColor,
        },
        surname: {
            borderWidth: surnameBorderStyle.borderWidth,
            borderColor: surnameBorderStyle.borderColor,
        },
        middlename: {
            borderWidth: middlenameBorderStyle.borderWidth,
            borderColor: middlenameBorderStyle.borderColor,
        },
        inputTitle: {
            marginBottom: 8,
            fontSize: 16,
            color: COLORS.black,
        },
        buttonContainer: {
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            marginBottom: 50,
        },
    })

    const onFocusMiddlename = () => {
        onChangeMiddlenameBorder({
            borderColor: COLORS.primary,
            borderWidth: 2,
        })
    }

    const onFocusName = () => {
        onChangeNameBorder({
            borderColor: COLORS.primary,
            borderWidth: 2,
        })
    }

    const onFocusSurname = () => {
        onChangeSurnameBorder({
            borderColor: COLORS.primary,
            borderWidth: 2,
        })
    }

    const onBlurName = () => {
        onChangeNameBorder({
            borderColor: COLORS.lightGray,
            borderWidth: 0,
        })
    }

    const onBlurSurname = () => {
        onChangeSurnameBorder({
            borderColor: COLORS.lightGray,
            borderWidth: 0,
        })
    }

    const onBlurMiddlename = () => {
        onChangeMiddlenameBorder({
            borderColor: COLORS.lightGray,
            borderWidth: 0,
        })
    }

    const uploadData = () => {
        alert([name, surname, middlename])
    }

    const goBack = () => {
        navigation.navigate('Profile')
    }

    return (
        <SafeAreaView style={[styles.container, SafeAreaViewAndroid.AndroidSafeArea]}>
            <Pressable style={styles.backButton} onPress={goBack}>
                <BackArrowIcon
                    height={24}
                    width={24}
                    color={COLORS.black}
                />
                <Text style={styles.backButtonText}>
                    Настройки
                </Text>
            </Pressable>

            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>
                    Имя
                </Text>
                <TextInput
                    style={[styles.input, styles.name]}
                    onChangeText={onChangeName}
                    placeholder={'Имя'}
                    placeholderTextColor={COLORS.lightGray3}
                    value={name}
                    focusable={true}
                    onFocus={onFocusName}
                    onBlur={onBlurName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>
                    Фамилия
                </Text>
                <TextInput
                    style={[styles.input, styles.surname]}
                    onChangeText={onChangeSurname}
                    placeholder={'Фамилия'}
                    placeholderTextColor={COLORS.lightGray3}
                    value={surname}
                    focusable={true}
                    onFocus={onFocusSurname}
                    onBlur={onBlurSurname}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>
                    Отчество
                </Text>
                <TextInput
                    style={[styles.input, styles.middlename]}
                    onChangeText={onChangeMiddlename}
                    placeholder={'Отчество'}
                    placeholderTextColor={COLORS.lightGray3}
                    value={middlename}
                    focusable={true}
                    onFocus={onFocusMiddlename}
                    onBlur={onBlurMiddlename}
                />
            </View>
            <View style={styles.buttonContainer}>
                <BigButton
                    title={'Сохранить изменения'}
                    onPress={uploadData}
                />
            </View>
        </SafeAreaView>
    );
}