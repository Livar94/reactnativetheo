import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, TextInput, Keyboard } from 'react-native';
import Scroll from '../components/Scroll'

export default function Screen2({ navigation }) {
  const [text, setText] = useState('');

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Screen 2</Text>
      <Text style={{ fontSize: 10 }}>The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it is also used as a gundog, and may be trained for use as a guide dog.</Text>
     <Scroll />
     <TextInput
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Type something"
      />
      <Pressable onPress={closeKeyboard} style={{ padding: 10, backgroundColor: 'lightgray' }}>
        <Text>Close Keyboard</Text>
      </Pressable>
      <Pressable
        style={{ marginTop: 20, marginBottom: 50, padding: 10, backgroundColor: 'green' }}
        onPress={() => navigation.goBack('start1')}
      >
        <Text style={{ color: 'white' }}>Go Back to Screen 1</Text>
      </Pressable>
      
    </View>
  );
}

