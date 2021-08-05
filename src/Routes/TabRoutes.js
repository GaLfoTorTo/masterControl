import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../Pages/Home/Home';
import Agendamento from '../Pages/Agendamento/Agendamento';
import Colors from '../Style/Colors';

const Tab = createBottomTabNavigator();

const TabRoutes = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({color, size}) =>{
                    let iconName;
                    switch(route.name){
                        case 'Home':
                            iconName = 'home'
                            break;
                        case 'Agendamento':
                            iconName = 'clock'
                            break;
                        default:
                            break;
                    }
                    return <Icon name={iconName} size={size} color={color} options={{ title: '' }} />;
                }
                
            })}
            tabBarOptions={{
                activeTintColor: Colors.success,
                inativeTintColor: Colors.secondary,
                style: {
                    backgroundColor: Colors.ligth,
                    height: 70
                }
            }}
        >
            <Tab.Screen 
                name='Home'
                component={Home}
                navigation={navigation}
            />
            <Tab.Screen
                name='Agendamento'
                component={Agendamento}
                navigation={navigation}
            />
            {/* <Tab.Screnn
                name='Lista'
                component={Lista}
                navigation={navigation}
            /> */}
        </Tab.Navigator>
    )
}

export default TabRoutes;