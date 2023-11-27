import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View} from 'react-native';
import { icons, appTheme }  from "./constants"
import {BigButton} from "./src/ui/BigButton";
import {SmallButton} from "./src/ui/SmallButton";
import {SmallRoundButton} from "./src/ui/SmallRoundButton";
import {BigRoundButton} from "./src/ui/BigRoundButton";
import {Checkbox} from "./src/ui/Checkbox";
import {COLORS} from "./constants/theme";
import {Toggle} from "./src/ui/Toggle";

const buttonProps = {
    title: 'text',
    accessibilityTitle: 'qwe',
};

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
        <BigButton />
        <Text>  </Text>
        <SmallRoundButton />
        <Text>  </Text>
        <BigRoundButton />
        <Text>  </Text>
        <SmallButton />
        <Text>  </Text>
        <Checkbox></Checkbox>
        <Text>  </Text>
        {/*<Toggle></Toggle>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: appTheme.COLORS.lightGray4,
      marginTop: 20,
  },
  container: {
    backgroundColor: appTheme.COLORS.white,
  },
});
