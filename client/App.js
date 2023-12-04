import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View} from 'react-native';
import { icons, appTheme }  from "./constants"
import {Order} from "./src/components/Order";
import {Comment} from "./src/components/Comment";
import {SmallButton} from "./src/ui/SmallButton";
import {BigButton} from "./src/ui/BigButton";
import {SmallRoundButton} from "./src/ui/SmallRoundButton";
import {BigRoundButton} from "./src/ui/BigRoundButton";

export default function App() {
  return (
      <View style={styles.container}>
        <Text> </Text>
        <View style={styles.main}>
            <Comment
                image={require('./assets/ExamplePhoto.png')}
                text={'Пиццу у двери положите) ещё лифт кстати не работает. Хорошего дня! Здоровья, счастья, любви.'}
            />
        </View>
        <Text></Text>
          <Order></Order>
          <Text></Text>
          <Order></Order>
          <Text></Text>
          <SmallButton title={'Кнопка'} />
          <BigButton title={'Кнопка'} />
          <SmallRoundButton title={'Кнопка'} />
          <BigRoundButton />
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
