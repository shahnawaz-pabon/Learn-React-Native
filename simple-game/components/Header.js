import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Header;
