import {useNavigation} from '@react-navigation/native';
import React , { useContext , useState , useEffect } from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import { UserContext } from '../../../../contexts/UserContext'
import { colors } from '../../../../Utilities/colors'

export const SubDealerCard = ({
    // item: {
    //   seller: {name, sfid},
    // },
  }) => {
    const navigation = useNavigation();
  
    return (
      <Pressable
        onPress={() => navigation.navigate('RetailerProfile')}
        style={styles.surface}>
        <View style={styles.row}>
          <Text style={styles.head}>Sub-Dealer name</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subhead}>Category B</Text>
        </View>
        <View style={[styles.keyvalue, styles.marginTop]}>
          <Text style={styles.key}>Area</Text>
          <Text style={styles.value}>Daryaganj, New Delhi</Text>
        </View>
        <View style={[styles.keyvalue]}>
          <Text style={styles.key}>Last Order Date</Text>
          <Text style={styles.value}>27-02-2020</Text>
        </View>
        <View style={[styles.keyvalue]}>
          <Text style={styles.key}>Total Order Value</Text>
          <Text style={styles.value}>3,56,000</Text>
        </View>
        <View style={[styles.keyvalue]}>
          <Text style={styles.key}>Last Visit Date</Text>
          <Text style={styles.value}>29-09-2020</Text>
        </View>
        <View style={[styles.keyvalue]}>
          <Text style={styles.key}>Main Competitor</Text>
          <Text style={styles.value}>Finolex</Text>
        </View>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    surface: {
      elevation: 1,
      backgroundColor: 'white',
      marginVertical: 10,
      paddingHorizontal: '8%',
      paddingVertical: 14,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    keyvalue: {
      marginVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    head: {color: colors.blue, fontWeight: 'bold', fontSize: 20},
    subhead: {fontSize: 16, color: colors.black},
    key: {color: colors.grey},
    value: {
      color: colors.black,
      fontWeight: 'bold',
      width: '50%',
    },
    marginTop: {marginTop: 18},
  });
  