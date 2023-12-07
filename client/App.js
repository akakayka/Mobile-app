import * as React from "react";
import {MainContainer} from "./src/navigation/MainContainer";
import {AuthorizationPage} from "./src/navigation/screens/AuthorizationPage";
import * as Font from 'expo-font';
import {useState} from "react";

const fonts = () => Font.loadAsync({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
})


function App() {
    const [isReady, setIsReady] = useState(false);
    const [isAuth, setIsAuth] = useState(false)

    const data = [
        {
            number: '054',
            address: 'Комсомольская 70',
            distance: '3',
            timeFrom: '16:20',
            timeTo: '18:59'
        },
        {
            number: '134',
            address: 'Ленина 128',
            distance: '0.8',
            timeFrom: '17:34',
            timeTo: '18:59'
        }
    ]

    const onPress = () => {
        setIsAuth(!isAuth)
    }

    return (
        isAuth ? <MainContainer />: <AuthorizationPage onPress={onPress}/>
    );
}

export default App;