import * as React from 'react';
import { View, Text } from 'react-native';
import {useMyContext} from "../../../../../пиздец/client/globalContext";

export default function MapPage({ navigation }) {
    const { globalID, setGlobalID } = useMyContext();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Map" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Map Screen</Text>
        </View>
    );
}