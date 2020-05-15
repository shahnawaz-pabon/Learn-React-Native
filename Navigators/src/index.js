/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

import { createAppContainer } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        //   drawerIcon: ({ tintColor }) => (
        //     <Image
        //       source={require('./chats-icon.png')}
        //       style={[styles.icon, { tintColor: tintColor }]}
        //     />
        //   ),
    };

    render() {
        return (
            <Button
                onPress={() =>
                    // this.props.navigation.navigate('Notifications')
                    this.props.navigation.toggleDrawer()
                }
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        //   drawerIcon: ({ tintColor }) => (
        //     <Image
        //       source={require('./notif-icon.png')}
        //       style={[styles.icon, { tintColor: tintColor }]}
        //     />
        //   ),
    };

    render() {
        return (
            <Button
                onPress={() =>
                    // this.props.navigation.goBack()
                    this.props.navigation.toggleDrawer()
                }
                title="Go back home"
            />
        );
    }
}

class TopTabOne extends React.Component {

    render() {
        return (
            <View>
                <Text>Top Tab One</Text>
            </View>
        );
    }
}

class TopTabTwo extends React.Component {

    render() {
        return (
            <View>
                <Text>Top Tab Two</Text>
            </View>
        );
    }
}

class TopTabThree extends React.Component {

    render() {
        return (
            <View>
                <Text>Top Tab Three</Text>
            </View>
        );
    }
}

const topTabs = createMaterialTopTabNavigator({
    TopTabOne: {
        screen: TopTabOne,
        //   navigationOptions:{
        //     tabBarIcon: ({ focused, tintcolor }) => (
        //       <Icon name="ios-home" size={24}  />
        //     )
        //   }
    },
    TopTabTwo: {
        screen: TopTabTwo,
        //   navigationOptions:{
        //     tabBarIcon: ({ tintcolor }) => (
        //       <Icon name="ios-mail" size={24} />
        //     )
        //   }
    },
    TopTabThree: {
        screen: TopTabThree
    }
});

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,

    },
    TopTabs: {
        screen: topTabs
    }
}, {
    drawerType: 'slide',
});

export default createAppContainer(MyDrawerNavigator);

// export default class App extends React.Component {

//     render() {
//         return (
//             <>
//                 <StatusBar barStyle="dark-content" />
//                 <SafeAreaView>
//                     <ScrollView
//                         contentInsetAdjustmentBehavior="automatic">
//                         <View style={styles.body}>
//                             <Text>Hello Navigators</Text>
//                             {/* <MyApp /> */}
//                         </View>
//                     </ScrollView>
//                 </SafeAreaView>
//             </>
//         );
//     }
// };

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
