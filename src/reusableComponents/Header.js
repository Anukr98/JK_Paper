import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Header = ({title}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={[{marginTop: top}, styles.color]}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="bell" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  color: {backgroundColor: 'white'},
});
