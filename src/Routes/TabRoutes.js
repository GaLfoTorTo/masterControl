import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../Style/Colors';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.navigator
            screenOptions={({route})=>({
                tabBarIcon: ({color, size}) =>{
                    let iconName;
                    switch(route.name){
                        case 'Home':
                            iconName = 'home'
                            break;
                        case 'agendamento':
                            iconName = 'clock'
                            break;
                        default:
                            break;
                    }
                }
                
            })}
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inativeTintColor: Colors.secondary,
                style: {
                    backgroundColor: Colors.ligth,
                    
                }
            }}
        >
            <Tab.Screnn 
                name='home'
                component={Home}
                navigation={navigation}
            />
            <Tab.Screnn
                name='agendamento'
                component={Agendamento}
                navigation={navigation}
            />
            <Tab.Screnn
                name='Lista'
                component={Lista}
                navigation={navigation}
            />
        </Tab.navigator>
    )
}

export default TabRoutes;