import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';

import AutoHeightWebView from 'react-native-autoheight-webview'

import faker from 'faker';

export const App = () => {
  const modalizeRef = useRef(null);

  const handleOpen = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

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
      <Text style={s.content__heading}>GitHub</Text>
      <AutoHeightWebView
        style={{ width: '100%', marginTop: 35 }}
        customScript={`document.body.style.background = 'lightyellow';`}
        customStyle={`
        * {
          font-family: 'Times New Roman';
        }
        p {
          font-size: 16px;
        }
      `}
        files={[{
          href: 'cssfileaddress',
          type: 'text/css',
          rel: 'stylesheet'
        }]}
        source={{ uri: 'https://github.com/jeremybarbet/react-native-modalize' }}
        startInLoadingState={true}
        scalesPageToFit={true}
        viewportContent={'width=device-width, user-scalable=no'}
      />
    </View>
  );

  return (
    <Modalize
      ref={modalizeRef}
      HeaderComponent={renderHeader}
      modalStyle={s.content__modal}
      alwaysOpen={85}
      handlePosition="outside"
      handleStyle={{ backgroundColor: '#2c3e50' }}
      modalTopOffset={100}
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
    textAlign: "center",
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
});