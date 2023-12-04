import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View} from 'react-native';
import { icons, appTheme }  from "./constants"
import {Order} from "./src/components/Order";
import {Comment} from "./src/components/Comment";
import {SmallButton} from "./src/ui/SmallButton";
import {BigButton} from "./src/ui/BigButton";
import {SmallRoundButton} from "./src/ui/SmallRoundButton";
import {BigRoundButton} from "./src/ui/BigRoundButton";
import {MainContainer} from "./src/screens/MainContainer";
import {AuthorizationPage} from "./src/screens/AuthorizationPage";

export default function App() {
  return (
      <View style={styles.container}>
          <MainContainer></MainContainer>
          <StatusBar style={'auto'}></StatusBar>
      </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: appTheme.COLORS.lightGray4,
      marginTop: 20,
  },
  container: {
    backgroundColor: appTheme.COLORS.lightGray4,
      marginTop: 20,
  },
});
