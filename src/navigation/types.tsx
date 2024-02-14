import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootStack = {
    Signin:undefined;
    ToDoList:undefined;
    ToDoListItem:undefined;
    Splash:undefined;
    AppStack:undefined
};

export type NavigationType = NativeStackNavigationProp<RootStack>
