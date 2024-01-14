import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "./screens/ProfilePage";
import {Settings} from "./screens/Settings";
import {OrdersHistory} from "./screens/OrdersHistory";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const ProfileContainer = (props) => {
    const onPress2 = () => {
        props.onPress();
    }
    return (
            <Stack.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    header: () => false
                }}
            >
                <Stack.Screen name={'Back'} component={ProfilePage} onPress = {onPress2}/>
                {/*<Stack.Screen name={'Settings'} component={Settings} />*/}
                <Stack.Screen name={'History'} component={OrdersHistory}/>
            </Stack.Navigator>
    );
}