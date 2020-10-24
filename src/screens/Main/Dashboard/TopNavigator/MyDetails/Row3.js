import React from 'react'
import { View , Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'native-base'
import { colors } from '../../../../../Utilities/colors'

export const Row3 = () => {
    return (
      <View
        style={{
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: 6,
            paddingVertical: 10,
            width: '48%',
            elevation: 2,
            backgroundColor: 'white',
  
            borderRadius: 5,
          }}>
          <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 12}}>
            VISITS
          </Text>
          <View style={{paddingHorizontal: 4, paddingVertical: 6, marginTop: 6}}>
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
                  name="location-on"
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
                  name="location-on"
                />
              ))}
            </View>
            <View
              style={{
                marginTop: 6,
                width: '75%',
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
                width: '75%',
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
            <View style={{paddingTop: 20}}>
              <Text style={{fontWeight: '300'}}>SEPTEMBER</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 6,
            paddingVertical: 10,
            elevation: 2,
            backgroundColor: 'white',
            width: '48%',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            EVENTS
          </Text>
          <View style={{paddingHorizontal: 4, paddingVertical: 6}}>
            <Icon
              name="calendar-outline"
              style={{color: colors.blue, paddingVertical: 5, fontSize: 42}}
            />
            <View
              style={{
                marginTop: 5,
                width: '75%',
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
                width: '75%',
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
            <View style={{paddingTop: 20}}>
              <Text style={{fontWeight: '300'}}>SEPTEMBER</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  