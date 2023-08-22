import { View, ScrollView } from 'react-native';
import MyRowComponent from './MyRowComponent';

export default function ScrollableList() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <MyRowComponent
            itemsList={Array.from({ length: 45 }, (_, index) => ({ name: `Item ${index + 1}`, id: index + 1 }))}
          />
      </View>
    </ScrollView>
  );
}