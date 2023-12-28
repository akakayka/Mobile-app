import * as React from "react";
import {MainContainer} from "./src/navigation/MainContainer";
import {AuthorizationPage} from "./src/navigation/screens/AuthorizationPage";
import * as Font from 'expo-font';
import {useState} from "react";
import {MyOrderProvider, MyProvider} from "../../пиздец/client/globalContext";
import {UserProvider} from "../../пиздец/client/UserContext";

const fonts = () => Font.loadAsync({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
})


function App() {
    const [isReady, setIsReady] = useState(false);
    const [isAuth, setIsAuth] = useState(false);



    const onPress = () => {
        setIsAuth(!isAuth)
    }

    return (
        <MyOrderProvider>
            <UserProvider>
                <MyProvider>
                    {isAuth ? <MainContainer onPress={() => onPress()}/> : <AuthorizationPage onPress={onPress}/>}
                    {/*<MainContainer/>*/}
                </MyProvider>
            </UserProvider>
        </MyOrderProvider>
    );
}

export default App;