import React from 'react';
import {View} from 'react-native';
import { Row1 } from './Row1'
import { Row2 } from './Row2'
import { Row3 } from './Row3'

export const Details = () => {

    return(
        <View style = {{ paddingHorizontal : 18 , paddingVertical : 12 , flex : 1}}>
            <Row1 />
            <Row2 />
            <Row3 />
        </View>
    )
}