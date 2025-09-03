import { Platform, Text, View } from 'react-native';
import { GlobalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';


const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {

  const [loaded, error] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={GlobalStyles.background}>
      <Text>RootLayout</Text>
      <Slot/>
      <StatusBar/>
    </View>
  )
}

export default RootLayout