import React , { useEffect, useMemo, useReducer} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import Login from '../Pages/Login/Login';
import Visualizar from '../Pages/Visualizar/Visualizar';
import Novo from '../Pages/Novo/Novo';
import NovoPaciente from '../Pages/NovoPaciente/NovoPaciente';
import {AuthContext} from '../Components/Context';
import {getUser, removeUser } from '../Storage/Storage';

const Stack = createStackNavigator();

const StackRoutes = ({ navigation }) => {

    const initialState ={
        user: null
    }

    const reducer = (prev, action) => {
        switch(action.type){
            case 'LOGAR':
                return{
                    ...prev,
                    user: action.user
                }
            case 'LOGOUT':
                return{
                    ...prev,
                    user: null
                }
        }
    }

    const [loginState, dispatch] = useReducer(reducer, initialState)
    const state = useMemo(() => ({
        signIn: () =>{
            const user = async () => {
                const data = await getUser()
                return data != null && data;
            }
            dispatch({type: 'LOGAR', user: user()})
        },
        signOut: () => {
            const remove = async () =>{
                const data = await removeUser()
                return data;
            }
            dispatch({ type: 'LOGOUT', user: remove() })
        }
    }))

    useEffect(() => {
        const user = async () => {
            await getUser();
        }
        dispatch({ type: 'LOGAR', user: user() })
    },[])
    
    return (
        <AuthContext.Provider value={state}>
            <NavigationContainer>
                {loginState.user == null ? (
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
                </Stack.Navigator>
                ): (
                <Stack.Navigator>
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
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default StackRoutes;