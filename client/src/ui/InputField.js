import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {COLORS} from "../../constants/theme";

export const InputField = (props) => {
    const [text, onChangeText] = useState('');
    const [borderStyle, onChangeBorder] = useState({
        borderColor: COLORS.lightGray,
        borderWidth: 0,
    })

    const styles = StyleSheet.create({
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

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={props.placeholder}
                placeholderTextColor={COLORS.lightGray3}
                value={text}
                focusable={true}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </SafeAreaView>
    );
};

