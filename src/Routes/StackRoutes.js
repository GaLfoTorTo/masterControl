import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Login/Login';

const Stack = createStackNavigator();

const StackRoutes = ({ navigation }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={TabRoutes}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Lista'
                    component={Lista}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackRoutes;