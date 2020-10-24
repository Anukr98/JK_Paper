import React from 'react';
import {View, StyleSheet, TextInput, Text, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../Utilities/colors'

export const Header = ({setFilters, filters, openModal}) => {
    const {top} = useSafeAreaInsets();
    return (
      <View style={[styles.header, {marginTop: top}]}>
        <TextInput
          value={filters.name}
          onChangeText={(text) => setFilters((p) => ({...p, name: text}))}
          style={styles.search}
          placeholderTextColor={colors.blue}
          placeholder="Search by Name..."
        />
        <Pressable onPress={() => openModal()} style={styles.view4}>
          <Text style={styles.text1}>
            {filters.area !== '' ? filters.area : 'Select Area'}
          </Text>
          <MaterialCommunityIcons
            color={colors.blue}
            size={24}
            name="chevron-down"
          />
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'white',
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '8%',
    },
    search: {
      paddingVertical: 6,
      width: '100%',
      borderRadius: 25,
      paddingHorizontal: 20,
      elevation: 5,
      backgroundColor: 'white',
      fontSize: 16,
      color: colors.blue,
    },
    view4: {
      marginTop: 16,
      backgroundColor: 'white',
      paddingVertical: 8,
      paddingHorizontal: '8%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 25,
      elevation: 5,
    },
    text1: {color: colors.blue, fontSize: 16},
  });
  