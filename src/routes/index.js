import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux'

import DrawerNav from './drawerNavigation';
import Register from '../screens/register/index'


const Stack = createNativeStackNavigator();

export default RouteNavigation = () => {

    const usertoken = useSelector(state => state.userReducer.userId)
    const auth = usertoken

    console.log(auth)
    useEffect(() => {

    }, [usertoken])

    return (
        <NavigationContainer >
            {auth == "" ?
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                    <Stack.Screen name="Login" component={Register} />
                </Stack.Navigator>
                :
                <DrawerNav />
            }
        </NavigationContainer>
    );
}