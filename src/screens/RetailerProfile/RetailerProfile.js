import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Spinner} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useGet } from '../../hooks/useGet'
import { UserContext } from '../../contexts/UserContext'
import { colors } from '../../Utilities/colors'
import { Header } from '../../reusableComponents/Header'
import { TopNavigator } from './TopNavigator/index'

export const RetailerProfile = ({
    // route: {
    //   params: {id},
    // },
  }) => {
  
    useEffect(()=>{
      fetch('https://jkpaper-sandbox.herokuapp.com/party/getParties').then(result=>result.json())
      .then(data=>{
        console.log(data);
      })
    },[]);
    
    const { authPayload } = useContext(UserContext)
    const id = authPayload.user.id
    const [data] = useGet(`/sellers/detail?id=${id}`);
  
    if (data.loading) {
      return <Spinner color={colors.blue} />;
    }
  
    console.log(data);
  
    return (
      <View style={styles.flex}>
        <Header title="Retailer Profile" />
        <View style={styles.view1}>
          <View style={styles.view3}>
            <Text style={styles.text1}>YashRaj Traders</Text>
            <Text style={styles.grey}>Daryaganj, New Delhi</Text>
            <Text style={styles.grey}>Category B</Text>
          </View>
          <View style={styles.view2}>
            <Button
              theme={{roundness: 18}}
              color={colors.blue}
              icon="phone"
              mode="contained"
              uppercase={false}
              onPress={() => console.log('Pressed')}>
              <Text>Call</Text>
            </Button>
            <Button
              theme={{roundness: 18}}
              color={colors.blue}
              icon={() => (
                <FontAwesome size={18} color="white" name="location-arrow" />
              )}
              mode="contained"
              uppercase={false}
              onPress={() => console.log('Pressed')}>
              Direction
            </Button>
            <Button
              theme={{roundness: 18}}
              color={colors.blue}
              icon={() => (
                <MaterialIcons size={18} color={colors.blue} name="edit" />
              )}
              mode="outlined"
              uppercase={false}
              onPress={() => console.log('Pressed')}>
              Edit
            </Button>
          </View>
        </View>
        <TopNavigator />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    view1: {
      height: 184,
      backgroundColor: 'white',
      paddingHorizontal: '6%',
    },
    view2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    view3: {marginVertical: 32},
    grey: {color: 'grey'},
    text1: {fontSize: 22, fontWeight: 'bold'},
    flex: {flex: 1},
  });
  