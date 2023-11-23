import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import { icons, COLORS }  from "./constants"

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text>Заказ №054</Text>
        <Text>status</Text>
        <Text>address</Text>
        <Text>address description</Text>
        <Text>time</Text>


      </View>
      <View>
        <Image
            source={icons.done}
            style={{
                marginTop: 150,
            }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: COLORS.lightGray4,
  },
  container: {
    // backgroundColor: COLORS.white,
  },
});
