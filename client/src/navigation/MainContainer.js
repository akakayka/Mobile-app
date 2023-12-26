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
import {COLORS} from "../../constants/theme";
import {ProfileContainer} from "./ProfileContainer";

const homeName = "Home";
const profileName = "Profile";
const mapName = "Map"
const orderName = "Order"
const ordersName = "Orders"

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) =>
                     ({
                        tabBarIcon: ({ focused, color, size }) => {
                            switch (route.name) {
                                case homeName:
                                    return <HomeIcon color={COLORS.white}/>
                                case profileName:
                                    return <ProfileIcon color={COLORS.white}/>
                                case mapName:
                                    return <MapIcon color={COLORS.white}/>
                                case orderName:
                                    return <TimeIcon color={COLORS.white}/>
                                case ordersName:
                                    return <ListIcon color={COLORS.white}/>
                            }
                        },
                        tabBarStyle: {
                            backgroundColor: COLORS.primary,
                            height: '10%',
                            borderTopEndRadius: 16,
                            borderTopLeftRadius: 16,
                            paddingTop: '10%',
                            paddingBottom: '10%',
                            paddingLeft: '4%',
                            paddingRight: '4%'
                        },
                         tabBarShowLabel: false,
                         tabBarHideOnKeyboard: true,
                         header: () => false
                })}

            >
                <Tab.Screen name={homeName} component={HomePage} />
                <Tab.Screen name={orderName} component={OrderPage} />
                <Tab.Screen name={mapName} component={MapPage} />
                <Tab.Screen name={ordersName} component={OrdersPage} />
                <Tab.Screen name={profileName} component={ProfileContainer} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}