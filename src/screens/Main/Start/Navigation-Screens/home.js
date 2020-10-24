import { useNavigation } from '@react-navigation/native'
import { Button } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, View , Modal } from 'react-native'
import { colors } from '../../../../Utilities/colors'

const Home = () => {

    const navigation = useNavigation()
    const [modalVisible, setmodalVisible] = useState(false)

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <View style = {styles.container}>
                <Text style = {styles.titleText}>Welcome!</Text>
                
                <View style = {styles.btnContainer}>
                    <Button 
                        rounded 
                        style = {styles.button}
                        onPress = { () => navigation.navigate('Attendance') }
                    >
                        <Text style = {styles.buttonText}>Start</Text>
                    </Button>
                </View>

                <View style = {styles.btnContainer}>
                    <Button 
                        rounded 
                        style = {[styles.button , {backgroundColor : 'rgba(255,255,255,0.8)' , elevation : 3 , borderBottomColor : colors.blue , borderBottomWidth : 2}]}
                        onPress={() => { setmodalVisible(true) }}
                    >
                        <Text style = {[styles.buttonText , {color : colors.blue}]}>Leave</Text>
                    </Button>
                </View>

            </View>

            <Modal
                animationType="slide"
                visible={modalVisible}
            >
                <View style = {modalStyle.modalContainer}>
                    
                    <View style = {modalStyle.innerWrapper}>

                        <View style = {{alignItems : 'center'}}><Text style = {modalStyle.titleText}>You will be marked absent for</Text><Text style = {modalStyle.titleText}>today</Text></View>

                        <View style = {modalStyle.actionButtonContainer}>
                            <Button rounded style = {modalStyle.actionButton}>
                                <Text style = {modalStyle.actionButtonText}>Planned</Text>
                            </Button>
                            <Button rounded style = {modalStyle.actionButton}>
                                <Text style = {modalStyle.actionButtonText}>Ad-Hoc</Text>
                            </Button>
                        </View>

                        <View style = {modalStyle.submitButtonContainer}>
                            <Button 
                                rounded 
                                style = {modalStyle.submitButton}
                                onPress = { () => setmodalVisible(!modalVisible)}
                            >
                                <Text style = {modalStyle.actionButtonText}>Cancel</Text>
                            </Button>
                            <Button 
                                rounded 
                                style = {[modalStyle.submitButton , {backgroundColor : colors.blue}]}
                            >
                                <Text style = {[modalStyle.actionButtonText , {color : 'rgba(255,255,255,1)'}]}>Submit</Text>
                            </Button>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
      width : '100%',
      flex : .5,
      alignItems : "center",
      justifyContent : 'center'    
    },
  
    btnContainer: {
      width : '100%',
      marginTop : 25
    },
  
    button : {
      width : '70%',
      alignSelf : 'center',
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : colors.blue,
      paddingVertical : 22,
      borderColor : colors.blue,
      borderWidth : 1
    },
  
    buttonText : {
      color : '#fff' , 
      fontSize : 19 ,
      width : '97%' , 
      height : '90%' ,
      textAlign: 'center',
      textTransform : 'uppercase'
    },
  
    titleText:{
      color : colors.blue,
      fontSize : 30,
      fontWeight : '600'
    }
  
})

const modalStyle = StyleSheet.create({
    
    modalContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    innerWrapper:{
        flex : .5,
        width : '80%',
        borderColor : 'lightgray',
        borderWidth : 1,
        elevation : 1,
        alignItems : 'center',
        justifyContent : 'space-evenly',
        paddingHorizontal : 20
    },

    titleText : {
        color : colors.blue,
        fontSize : 20
    },

    actionButtonContainer : {
        width : '100%',
    },

    actionButton : {
        alignSelf : 'center',
        width : '70%',
        marginBottom : 10,
        marginTop : 5,
        backgroundColor : 'rgba(255,255,255,1)',
        justifyContent : 'center',
        borderColor : colors.blue,
        borderWidth : 1
    },

    actionButtonText : {
        color : colors.blue,
        fontSize : 16
    },

    submitButtonContainer : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },

    submitButton : {
        width : '35%',
        backgroundColor : 'rgba(255,255,255,1)',
        borderColor : colors.blue,
        borderWidth : 1,
        justifyContent : 'center'
    },
})

export default Home