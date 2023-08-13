import React from 'react';
import { View, Text } from 'react-native';

export default function MyRowComponent() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </View>
  );
}