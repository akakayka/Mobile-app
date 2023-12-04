import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from "../../assets/icons/HomeIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import MapIcon from "../../assets/icons/MapIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import ListIcon from "../../assets/icons/ListIcon";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import MapPage from "./MapPage";
import OrderPage from "./OrderPage";
import OrdersPage from "./OrdersPage";
import {StyleSheet} from "react-native";

const homeName = "Home";
const profileName = "Profile";
const mapName = "Map"
const orderName = "Order"
const ordersName = "Orders"

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    marginTop: 50,
})

export const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        switch (route.name) {
                            case homeName:
                                return <HomeIcon />
                            case profileName:
                                return <ProfileIcon />
                            case mapName:
                                return <MapIcon />
                            case orderName:
                                return <TimeIcon />
                            case ordersName:
                                return <ListIcon />
                        }
                    },
                })}
            >
                <Tab.Screen name={homeName} component={HomePage} />
                <Tab.Screen name={orderName} component={OrderPage} />
                <Tab.Screen name={mapName} component={MapPage} />
                <Tab.Screen name={ordersName} component={OrdersPage} />
                <Tab.Screen name={profileName} component={ProfilePage} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}