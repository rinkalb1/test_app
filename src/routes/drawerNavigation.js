import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import Dashboard from '../screens/dashboard/index';

//Component
import { Header } from '../components/header/drawerHeader'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (

        <Drawer.Navigator initialRouteName="Home" screenOptions={{ header: () => <Header /> }}>

            <Drawer.Screen name="Home" component={Dashboard} />

        </Drawer.Navigator>

    );
}