import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View} from 'react-native';
import { icons, appTheme }  from "./constants"
import {Order} from "./src/components/Order";

export default function App() {
  return (
      <View style={styles.container}>
        <Text> </Text>
        <View style={styles.main}>

          <Order></Order>
          <Text></Text>
          <Order></Order>
          <Text></Text>
          <Order></Order>

        </View>
        <Text></Text>
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
  },
});
