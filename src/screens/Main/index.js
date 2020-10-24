import React , { useContext} from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from '../../Utilities/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Start } from './Start/Start'
import { Visits } from './Visits/Visits'
import { Menu } from './Menu/Menu'
import { Dashboard } from './Dashboard/Dashboard'
import { Party } from './Party/Party'

const Tab = createBottomTabNavigator()

export const Main = () => {

    return(
        <Tab.Navigator 
            initialRouteName = 'Dashboard'
            tabBarOptions = {{
                activeTintColor : colors.blue,
                style : { height : 54 , paddingBottom : '1%'},
            }}
        >
            <Tab.Screen 
                options = {{
                    tabBarIcon : ({color,size}) => (
                        <MaterialCommunityIcons 
                            color = {color}
                            size = {size}
                            name = 'calendar-blank'
                        />
                    )
                }}
                name = 'Start'
                component = {Start}
            />

            <Tab.Screen 
                options = {{
                    tabBarIcon : ({color,size}) => (
                        <MaterialIcons color = {color} size = {size} name = 'location-on' />
                    )
                }}
                name = 'Visits'
                component = {Visits}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                        color={color}
                        size={size}
                        name="view-dashboard-outline"
                        />
                    ),
                }}
                name="Dashboard"
                component={Dashboard}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons color={color} size={size} name="people" />
                    ),
                }}
                name="Party"
                component={Party}
            />

            <Tab.Screen 
                options = {{
                    tabBarIcon : ({color,size}) => (
                        <MaterialCommunityIcons color = {color} size = {size} name = 'menu' />
                    )
                }}
                name = 'Menu'
                component = {Menu}
            />
        </Tab.Navigator>
    )
}