import React from 'react';
import { View, Text } from 'react-native';

export default function MyRowComponent({ itemsList }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      {itemsList?.map ((item) => <Text key={item.id}>{item.name}</Text>)}

    </View>
  );
}