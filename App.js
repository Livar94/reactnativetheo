import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start1 from './components/Start1'
import Screen2 from './components/Screen2'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="start1" component={Start1} />
        <Stack.Screen name="start2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

