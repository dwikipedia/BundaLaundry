import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from '../Home'
import Account from '../Account'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Home />
            </View>
        );
    }
}

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Account />
            </View>
        );
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state
    let IconComponent = Ionicons
    let iconName
    if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : ''}`;

    } else if (routeName === 'Account') {
        iconName = `ios-person${focused ? '' : ''}`;
    }

    return <IconComponent name={iconName} size={25} color={tintColor} />;
}

const Navigations = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Account: AccountScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray'
        }
    }
)

export default createAppContainer(Navigations);