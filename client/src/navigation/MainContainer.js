import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from "../../assets/icons/HomeIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import MapIcon from "../../assets/icons/MapIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import ListIcon from "../../assets/icons/ListIcon";
import HomePage from "./screens/HomePage";
import ProfilePage from "./screens/ProfilePage";
import MapPage from "./screens/MapPage";
import OrderPage from "./screens/OrderPage";
import OrdersPage from "./screens/OrdersPage";
import {StyleSheet} from "react-native";

const homeName = "Home";
const profileName = "Profile";
const mapName = "Map"
const orderName = "Order"
const ordersName = "Orders"

const Tab = createBottomTabNavigator();



export const MainContainer = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) =>
                     ({
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
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'red',
                    tabBarStyle: {backgroundColor: '#F5B547', height: 60,
                        paddingTop: '12%',
                        paddingBottom: '12%',
                        paddingLeft: '4%',
                        paddingRight: '4%'}
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

const navStyles = StyleSheet.create({
    navContainer: {
        backgroundColor: '#F5B547',
        justifyContent: "space-between",
        height: '6,5%',
        paddingTop: '12,5%',
        paddingBottom: '12,5%',
        paddingLeft: '4%',
        paddingRight: '4%'
    }
})