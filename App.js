import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start1 from './components/Start1'
import Screen2 from './components/Screen2'
// import MyRowComponent from './components/MyRowComponent'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="start1" component={Start1} />
        <Stack.Screen name="start2" component={Screen2} />
        {/* <Stack.Screen name="start3" component={MyRowComponent} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
