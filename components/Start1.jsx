import React, { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import CustomImage from './Image1';
import MyRowComponent from './MyRowComponent';


export default function Start1({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Screen 1</Text>
      <CustomImage
        source={require('../assets/images/Theo.jpg')}
        width={300}
        height={200}
        style={{ marginVertical: 20 }}
      />
      <CustomImage
        source={require('../assets/images/Theosbror.jpg')}
        width={300}
        height={200}
        style={{ marginVertical: 20 }}
      />

      <Pressable
        style={{ marginTop: 20, padding: 10, backgroundColor: 'blue' }}
        onPress={() => navigation.navigate('start2')}
      >
        <Text style={{ color: 'white' }}>For more info</Text>
      </Pressable>

      <Pressable
        style={{ marginTop: 20, padding: 10, backgroundColor: 'blue' }}
        onPress={() => toggleModal()}
      >
        <Text style={{ color: 'white' }}>Open Modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => toggleModal()}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#943126', padding: 50, borderRadius: 10, }}>
            <Text style={{color: '#fff', marginBottom: 20}}>This is a modal!</Text>
            <Pressable onPress={() => toggleModal()}>
              <Text style={{color: '#fff'}}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <MyRowComponent style={{ flexDirection: 'row', justifyContent: 'space-around' }} itemsList={[{name: 'Item 1', id:1} ,{name: 'Item 2', id:2} , {name: 'Item 3', id:3}]} />
    </View>
  );
}
