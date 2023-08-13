import { useState } from 'react';
import React from 'react';
import { View, Text, TextInput, Pressable, Keyboard, Image, Modal } from 'react-native';
import MyRowComponent from './MyRowComponent';

export default function Start1({ navigation }) {
 
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Screen 1</Text>

      <Image
        source={require('../assets/images/Theo.jpg')} // Sätt sökvägen till din bild
        style={{ width: 300, height: 200, marginVertical: 20 }} // Justera storlek och stil efter behov
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

      
      
      
      <MyRowComponent />
      
    </View>
  );
}