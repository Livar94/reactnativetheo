import { View, Text } from 'react-native';

export default function MyRowComponent({ itemsList, style }) {
  return (
    <View style={style}>
      {itemsList?.map ((item) => <Text key={item.id}>{item.name}</Text>)}

    </View>
  );
}