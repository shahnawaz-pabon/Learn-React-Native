import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <View
      style={{
        padding: 30,
        flexDirection: 'row',
        height: 300,
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'stretch'
      }}
    >

      <View
        style={{
          backgroundColor: 'red',
          // width: 100,
          // height: 100,
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>

      </View>

      <View
        style={{
          backgroundColor: 'blue',
          // width: 100,
          // height: 100,
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>

      </View>

      <View
        style={{
          backgroundColor: 'green',
          // width: 100,
          // height: 100,
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

});
