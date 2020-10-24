import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { UserContext } from "../contexts/UserContext";
import { Login } from './Login/Login'
import { Main } from './Main/index'
import { RetailerProfile } from './RetailerProfile/RetailerProfile'
import { AddNewRetailer } from './AddNewRetailer/AddRetailer'

const Stack = createStackNavigator()

export const Entry = () => {

    const { authPayload : {isAuthenticated} } = useContext(UserContext)

    if(isAuthenticated){
        return(
            <Stack.Navigator screenOptions = {{ headerShown : false}}>

                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name = 'RetailerProfile' component = {RetailerProfile} />
                <Stack.Screen name = 'AddNewRetailer' component = {AddNewRetailer} />
            </Stack.Navigator>
        )
    }

    return(
        <Stack.Navigator screenOptions = {{ headerShown : false}}>

            <Stack.Screen name = 'Login' component = {Login} />

        </Stack.Navigator>
    )
}