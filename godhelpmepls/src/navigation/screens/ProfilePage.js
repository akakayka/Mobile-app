import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import SafeAreaViewAndroid from "../../components/SafeAreaViewAndroid";
import {COLORS} from "../../../constants/theme";
import StarIcon from "../../../assets/icons/StarIcon";
import ListIcon from "../../../assets/icons/ListIcon";
import StatisticsIcon from "../../../assets/icons/StatisticsIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import ArrowIcon from "../../../assets/icons/Arrowicon";
import {useDeliverymanContext} from "../../../UserContext";

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 24,
    },
    header: {
        fontSize: 24,
        color: COLORS.black,
        fontWeight: "bold",
        marginBottom: 32,
    },
    profileData: {
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: "bold",
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 32,
    },
    ratingText: {
        marginLeft: 4,
        color: COLORS.lightGray,
    },
    buttonContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 32,
        width: '100%',
    },
    button: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 32,
    },
    buttonText: {
        marginRight: "auto",
        marginLeft: 8,
        color: COLORS.lightGray,
        fontSize: 16,
    },
    logoutText: {
        fontSize: 16,
        color: COLORS.lightGray2,
    }
})

export default function ProfilePage({ navigation }) {
    const { userInfo, setUserInfo } = useDeliverymanContext();
    return (
        <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}>
            <Text style={styles.header}>
                Профиль
            </Text>
            <View style={styles.profileData}>
                <Text style={styles.name}>
                    {userInfo.name} {userInfo.sur_name} {userInfo.patronymic}
                </Text>
                <View style={styles.rating}>
                    <StarIcon
                        width={20}
                        height={20}
                        color={COLORS.primary}
                    />
                    <StarIcon
                        width={20}
                        height={20}
                        color={COLORS.primary}
                    />
                    <StarIcon
                        width={20}
                        height={20}
                        color={COLORS.primary}
                    />
                    <StarIcon
                        width={20}
                        height={20}
                        color={COLORS.primary}
                    />
                    <StarIcon
                        width={20}
                        height={20}
                        color={COLORS.lightGray3}
                    />
                    <Text style={styles.ratingText}>
                        4.5
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('History')}
                        style={styles.button}
                    >
                        <ListIcon
                            color={COLORS.primary}
                            width={24}
                            height={24}
                        />
                        <Text style={styles.buttonText}>
                            История заказов
                        </Text>
                        <ArrowIcon
                            width={24}
                            height={24}
                            color={COLORS.primary}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Statistics')}
                        style={styles.button}
                    >
                        <StatisticsIcon
                            color={COLORS.primary}
                            width={24}
                            height={24}
                        />
                        <Text style={styles.buttonText}>
                            Статистика
                        </Text>
                        <ArrowIcon
                            width={24}
                            height={24}
                            color={COLORS.primary}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.button}
                    >
                        <SettingsIcon
                            color={COLORS.primary}
                            width={24}
                            height={24}
                        />
                        <Text style={styles.buttonText}>
                            Настройки
                        </Text>
                        <ArrowIcon
                            width={24}
                            height={24}
                            color={COLORS.primary}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {}}
                    >
                        <Text style={styles.logoutText}>
                            Выйти из аккаунта
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}