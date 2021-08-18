import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveUser(user, token) {
    try{
        await AsyncStorage.setItem('@masterControl:user', JSON.stringify(user))
        await AsyncStorage.setItem('@masterControl:token', JSON.stringify(token))
    } catch(e){
        console.log(e)
    }
}

export async function getUser(){
    try{
        const masterControlUser = await AsyncStorage.getItem('@masterControl:user')
        const masterControlToken = await AsyncStorage.getItem('@masterControl:token')
        const user = masterControlUser != null ? JSON.parse(masterControlUser) : null;
        const  token = masterControlToken != null ? JSON.parse(masterControlToken) : null;
        return {user, token}
    }catch(e){
        console.log(e)
    }
}
export async function removeUser(){
    try{
        await AsyncStorage.removeItem('@masterControl:user');
        await AsyncStorage.removeItem('@masterControl:token');
    } catch (e) {
        console.log(e)
    }
}