/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

// import Travel from './src/navigation/Travel';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>Hello World!!!</Text>
      </View>
    );
  }

}

// export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
