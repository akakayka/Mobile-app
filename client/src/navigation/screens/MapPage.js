import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useMyContext} from "../../../globalContext";
import MapView, {Marker} from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import safeAreaViewAndroid from "../../components/SafeAreaViewAndroid";

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})

export default function MapPage({ navigation }) {
    const { globalID, setGlobalID } = useMyContext();
    return (
        <SafeAreaView style={safeAreaViewAndroid.AndroidSafeArea}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 56.84392816904743,
                    longitude: 60.65391892623551,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{
                    latitude: 56.84392816904743,
                    longitude: 60.65391892623551
                }} />
            </MapView>
        </SafeAreaView>
    );
}