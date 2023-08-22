import { Pressable, Text, View } from 'react-native';

const MyPressableComponent = ({ onPress, pressableStyle, textStyle, text }) => {
  return (
    <View style={pressableStyle}>
      <Pressable onPress={onPress} style={pressableStyle}>
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default MyPressableComponent;
