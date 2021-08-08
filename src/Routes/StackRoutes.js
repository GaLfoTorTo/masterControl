import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import Login from '../Pages/Login/Login';
import Visualizar from '../Pages/Visualizar/Visualizar';
import Novo from '../Pages/Novo/Novo';
import NovoPaciente from '../Pages/NovoPaciente/NovoPaciente';

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
                    name='NovoPaciente'
                    component={NovoPaciente}
                    options={{
                        title: false
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={TabRoutes}
                    options={{
                        title: false
                    }}
                />
                <Stack.Screen
                    name='Novo'
                    component={Novo}
                />
                <Stack.Screen
                    name='Visualizar'
                    component={Visualizar}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackRoutes;