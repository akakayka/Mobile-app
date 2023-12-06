import * as React from "react";
import {MainContainer} from "./src/navigation/MainContainer";
import {AuthorizationPage} from "./src/navigation/screens/AuthorizationPage";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {useState} from "react";
import {Text} from "react-native";

const fonts = () => Font.loadAsync({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
})


function App() {
    const [isReady, setIsReady] = useState(false);




    return (
        <AuthorizationPage></AuthorizationPage>
    );
}

export default App;