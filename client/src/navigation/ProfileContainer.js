import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "./screens/ProfilePage";
import {Settings} from "./screens/Settings";
import {OrdersHistory} from "./screens/OrdersHistory";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const ProfileContainer = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    header: () => false
                }}
            >
                <Stack.Screen name={'Back'} component={ProfilePage}/>
                <Stack.Screen name={'Settings'} component={Settings}/>
                <Stack.Screen name={'History'} component={OrdersHistory}/>
            </Stack.Navigator>
    );
}