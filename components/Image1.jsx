import { Image } from 'react-native';

const CustomImage = ({ source, width, height, style }) => {
  return (
    <Image
      source={source}
      style={{ width: width, height: height, ...style }}
    />
  );
}

export default CustomImage;