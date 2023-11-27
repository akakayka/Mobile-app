import React, {useState} from 'react'
import {StyleSheet, View} from "react-native";
import {COLORS} from "../../constants/theme";
import ToggleSwitch from 'toggle-switch-react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const Toggle = () => {
    const [isOn, onToggle] = useState(false)

    const onSwitchToggle = (previousValue) => onToggle(previousValue);

    return (
        <View style={styles.container}>
            <ToggleSwitch
                isOn={isOn}
                onColor={COLORS.primary}
                offColor={COLORS.lightGray3}
                label={isOn ? 'ON' : 'OFF'}
                onToggle={onSwitchToggle}
            />
        </View>
    );
}