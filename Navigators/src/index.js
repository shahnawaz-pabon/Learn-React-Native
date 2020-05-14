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

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,

    },
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
