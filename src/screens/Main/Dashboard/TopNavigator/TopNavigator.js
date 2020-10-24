import React from 'react'
import { useTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { colors } from '../../../../Utilities/colors'
import { Details } from './MyDetails/Details'

const Tab = createMaterialTopTabNavigator()

export const TopNavigator = () => {
    const { colors : theme } = useTheme()
    return(

        <Tab.Navigator
            tabBarOptions = {{
                indicatorStyle : { backgroundColor : colors.blue},
                style : {
                    backgroundColor : theme.background,
                    elevation : 0,
                    shadowOpacity : 0
                }
            }}
        >

            <Tab.Screen name = 'My Details' component = {Details} />
            <Tab.Screen name = 'Target' component = {Details} />
            <Tab.Screen name = 'Summary' component = {Details} />

        </Tab.Navigator>
    )
}