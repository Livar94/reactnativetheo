import { useState } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet } from 'react-native';
import Scroll from '../components/Scroll'
import MyPressableComponent from './Pressable';

export default function Screen2({ navigation }) {
  const [text, setText] = useState('');

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
      <Text style={styles.description}>
        The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and
        affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently
        registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it
        is also used as a gundog, and may be trained for use as a guide dog.
      </Text>
      <Scroll />
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Type something"
      />
      <MyPressableComponent
        onPress={closeKeyboard}
        pressableStyle={styles.closeButton}
        textStyle={styles.closeButtonText}
        text="Close Keyboard"
      />
      <MyPressableComponent
        onPress={() => navigation.goBack('start1')}
        pressableStyle={styles.goBackButton}
        textStyle={styles.goBackButtonText}
        text="Go Back to Screen 1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 10,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'lightgray',
  },
  closeButtonText: {
    fontSize: 16,
  },
  goBackButton: {
    marginTop: 20,
    marginBottom: 50,
    padding: 10,
    backgroundColor: 'green',
  },
  goBackButtonText: {
    color: 'white',
  },
});

