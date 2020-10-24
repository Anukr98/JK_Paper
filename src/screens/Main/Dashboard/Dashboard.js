import React from 'react'
import { ScrollView } from 'react-native'
import { Header } from './Header'
import { TopNavigator } from './TopNavigator/TopNavigator'

export const Dashboard = () => {
    return(
        <ScrollView>
            <Header />
            <TopNavigator />
        </ScrollView>
    )
}