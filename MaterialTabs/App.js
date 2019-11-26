import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
        </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
  }
}

class ImageScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Image Screen</Text>
            </View>
        );
    }
}

class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Cart Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Ubuntu-Bold'
  },
  iconLabel: {
    fontFamily: 'Ubuntu-Bold'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
{
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        tabBarLabel:<Text style={styles.iconLabel}>Home</Text>,
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
            </View>),
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions:{
          tabBarLabel:<Text style={styles.iconLabel}>Profile</Text>,
          tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
              </View>),
          activeColor: '#f0edf6',
          inactiveColor: '#7f8c8d',
          barStyle: { backgroundColor: '#2c3e50' },
      }
    },
    Image: {
      screen: ImageScreen,
      navigationOptions:{
        tabBarLabel:<Text style={styles.iconLabel}>History</Text>,
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>
            </View>),
        activeColor: '#f0edf6',
        inactiveColor: '#7f8c8d',
        barStyle: { backgroundColor: '#2c3e50' },
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions:{
        tabBarLabel: <Text style={styles.iconLabel}>Cart</Text>,
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>
            </View>),
        inactiveColor: '#7f8c8d',
        barStyle: { backgroundColor: '#2c3e50' },
      }
    },
  },
  {
    initialRouteName: "Home",
    activeColor: '#f0edf6',
    inactiveColor: '#7f8c8d',
    barStyle: { backgroundColor: '#2c3e50', fontFamily: 'Ubuntu-Bold' },
  },
);

export default createAppContainer(TabNavigator);
