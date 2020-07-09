import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import faker from 'faker';

export const App = () => {
  const modalizeRef = useRef(null);

  const handleClose = dest => {
    if (modalizeRef.current) {
      modalizeRef.current.close(dest);
    }
  };

  const renderHeader = () => (
    <TouchableOpacity
      style={s.modal__header}
      activeOpacity={0.75}
      onPress={() => handleClose('alwaysOpen')}
      hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
    >
      <Image
        source={require('./assets/cross.png')}
        style={{ tintColor: '#fff', width: '40%', height: '40%' }}
      />
    </TouchableOpacity>
  );

  const renderContent = () => (
    <View style={s.content}>
      <Text style={s.content__heading}>Article title</Text>
      <Text style={s.content__subheading}>November 11st 2018</Text>
      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(10)}</Text>
    </View>
  );

  return (
    <Modalize
      ref={modalizeRef}
      HeaderComponent={renderHeader}
      modalStyle={s.content__modal}
      alwaysOpen={85}
      handlePosition="outside"
      handleStyle={{ backgroundColor: '#2c3e50'}}
    >
      {renderContent()}
    </Modalize>
  );
};

const s = StyleSheet.create({
  modal__header: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 9000,

    alignItems: 'center',
    justifyContent: 'center',

    width: 25,
    height: 25,

    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
  },

  content: {
    padding: 15,
  },

  content__heading: {
    marginBottom: 2,

    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  content__subheading: {
    marginBottom: 20,

    fontSize: 16,
    color: '#ccc',
  },

  content__paragraph: {
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },
});