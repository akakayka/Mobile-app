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



    const onPress = () => {
        setIsAuth(!isAuth)
    }

    return (
        // isAuth ? <MainContainer /> : <AuthorizationPage onPress={onPress}/>
        <MainContainer/>
    );
}

export default App;