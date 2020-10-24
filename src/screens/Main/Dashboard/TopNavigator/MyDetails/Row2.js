import React from 'react';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../../Utilities/colors'

export const Row2 = () => {
    return (
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 6,
          paddingVertical: 14,
          elevation: 2,
          backgroundColor: 'white',
          width: '100%',
          borderRadius: 5,
        }}>
        <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 12}}>
          LEADS
        </Text>
        <View
          style={{
            paddingVertical: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '48%',
              justifyContent: 'center',
              paddingHorizontal: 24,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              {[1, 2, 3, 4].map((item) => (
                <MaterialIcons
                  key={item}
                  color={colors.blue}
                  size={24}
                  name="person"
                />
              ))}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              {[1, 2].map((item) => (
                <MaterialIcons
                  key={item}
                  color={colors.skyblue}
                  size={24}
                  name="person"
                />
              ))}
            </View>
          </View>
          <View style={{width: '48%', paddingHorizontal: 10}}>
            <View
              style={{
                marginTop: 14,
                width: '84%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 1,
              }}>
              <Text
                style={{fontWeight: 'bold', color: colors.blue, fontSize: 16}}>
                8000
              </Text>
              <Text style={{fontSize: 12, color: 'grey'}}>{'TARGET     '}</Text>
            </View>
            <View
              style={{
                width: '84%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 1,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: 'bold',
                  color: colors.skyblue,
                  fontSize: 16,
                }}>
                3000
              </Text>
              <Text style={{fontSize: 12, color: 'grey'}}>ACHIEVED</Text>
            </View>
            <View style={{paddingTop: 4}}>
              <Text style={{fontWeight: '300'}}>SEPTEMBER</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };