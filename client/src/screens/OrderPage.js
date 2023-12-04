import * as React from 'react';
import { View, Text } from 'react-native';

export default function OrderPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Order" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Order Screen</Text>
        </View>
    );
}