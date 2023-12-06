import React, {useState} from 'react'
import { StyleSheet, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {COLORS} from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});

export const Checkbox = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={28}
                fillColor={COLORS.primary}
                text="Checkbox"
                textStyle={{textDecorationLine: "none", fontSize: 16, lineHeight: 20}}
                iconStyle={{ borderRadius: 5, borderColor: COLORS.primary }}
                innerIconStyle={{ borderRadius: 5, borderColor: COLORS.primary }}
                onPress={(isChecked) => {}}
            />
        </View>
    );
}