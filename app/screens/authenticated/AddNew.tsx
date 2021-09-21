import React from 'react';

// import {SafeAreaView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Block from '../../components/Block';
import Navbar from '../../components/Navbar';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
type Props = {
  navigation: NativeStackNavigationProp<any>;
};
const AddNew: React.FC<Props> = ({navigation}) => {
  return (
    <Block>
      <Navbar navigation={navigation} />
      <Block>
        <TextInput outlineColor="#0000ff" label="search" />
      </Block>
    </Block>
  );
};

export default AddNew;

// const styles = StyleSheet.create({});
