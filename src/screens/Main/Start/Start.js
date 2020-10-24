import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from './Navigation-Screens/home'
import MarkAttendance from './Navigation-Screens/MarkAttendance'

export const Start = () => {

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component = {Home} />
            <Stack.Screen name = 'Attendance' component = {MarkAttendance} />
        </Stack.Navigator>
    )
}