import React from 'react'
import { Button } from 'native-base'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../../Utilities/colors'
import Svg , { G , Circle , Line } from 'react-native-svg'

const MarkAttendance = ({
    percentage = 100,
    radius = 100,
    strokeWidth = 6,
    duration = 500,
    color = 'tomato',
    delay = 0,
    textColor,
    max = 100
}) => {
    const halfCircle = radius + strokeWidth
    return(
        <View style = {styles.container}>
            
            <View style = {styles.innerWrapper}>
                
                <Button rounded style = {styles.button}>
                    <Text style = {styles.btnText}>MARKET VISIT</Text>
                </Button>
                <Button rounded style = {styles.button}>
                    <Text style = {styles.btnText}>IN OFFICE</Text>
                </Button>
                <Button rounded style = {styles.button}>
                    <Text style = {styles.btnText}>WORK FROM HOME</Text>
                </Button>

            </View>
        </View>
    )    
}

export default MarkAttendance

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    innerWrapper:{
        flex : .5,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },

    button : {
        width : '80%',
        alignSelf : 'center',
        justifyContent : 'center',
        backgroundColor : 'rgba(255,255,255,0.8)',
        borderColor : colors.blue,
        borderWidth : 1
    },

    btnText : {
        color : colors.blue,
        fontSize : 18,
        width : '97%', 
        textAlign: 'center',
    }
})











/*
    return(
        <View style = {{ flex : 1 , alignItems : 'center' , justifyContent : 'center' , position : 'relative'}}>
            <Svg 
                height = {radius * 2} 
                width = {radius * 2}
                viewBox = {`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
                <Circle 
                    cx = '50%'
                    cy = '50%'
                    stroke = {color}
                    strokeWidth = {strokeWidth}
                    r = {radius}
                    strokeOpacity = {0.2}
                />
                <Circle 
                    cx = '50%'
                    cy = '50%'
                    stroke = {color}
                    strokeWidth = {strokeWidth}
                    r = {radius}
                />
                <Line
                    strokeWidth = {3}
                    x1 = '80'
                    y1 = '110'
                    x2 = '100'
                    y2 = '130'
                    stroke = {color}
                    strokeDasharray = {}
                />
                <Line
                    strokeWidth = {3}
                    x1 = '100'
                    y1 = '130'
                    x2 = '150'
                    y2 = '75'
                    stroke = {color}
                />
            </Svg>
        </View>
    )
}

export default MarkAttendance


*/