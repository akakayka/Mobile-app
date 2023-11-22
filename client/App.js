import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#C8D0D4',
  },
  container: {
    backgroundColor: '#FFFFFF',
  },
});
