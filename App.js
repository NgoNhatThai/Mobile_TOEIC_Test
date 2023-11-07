import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack= createNativeStackNavigator()
import home_screen from './screens/home_screen'
import favourite_screen from './screens/favourite_screen'
import profile_screen from './screens/profile_screen'
import test_screen from './screens/test_screen'
import video_screen from './screens/video_screen'
import vocabulary_screen from './screens/vocabulary_screen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home_screen' component={home_screen} options={{headerShown: false}}/>
        <Stack.Screen name='favourite_screen' component={favourite_screen} options={{headerShown: false}}/>
        <Stack.Screen name='profile_screen' component={profile_screen} options={{headerShown: false}}/>
        <Stack.Screen name='test_screen' component={test_screen} options={{headerShown: false}}/>
        <Stack.Screen name='video_screen' component={video_screen} options={{headerShown: false}}/>
        <Stack.Screen name='vocabulary_screen' component={vocabulary_screen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
