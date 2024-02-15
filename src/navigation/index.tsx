
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { useSelector } from 'react-redux';
import SigninScreen from '../screens/Auth/SigninScreen';
import SplashScreen from '../screens/Auth/SplashScreen';
import ReuestsList from '../screens/App/ReuestsList';




const Stack = createNativeStackNavigator();


////////==== Auth Screens
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Splash'} component={SplashScreen} />
            <Stack.Screen name={'Signin'} component={SigninScreen} />
            <Stack.Screen name={'AppStack'} component={AppStack} />
        </Stack.Navigator>
    );
};

////////==== App Screens
const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ReuestsList" component={ReuestsList} />
        </Stack.Navigator>
    );
};


function MainNavigation() {
    return (
        <NavigationContainer >
            <AuthStack />
        </NavigationContainer>
    );
}




export default MainNavigation;