import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import Block from '../../components/Block';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Navbar from '../../components/Navbar';
type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const SignIn: React.FC<Props> = ({navigation}) => {
  return (
    <Block style={styles.main}>
      <Navbar navigation={navigation} />
      <KeyboardAvoidingView>
        <TextInput label="Email" keyboardType="email-address" />
        <TextInput label="Password" secureTextEntry />
        <Button>Sign In</Button>
      </KeyboardAvoidingView>
    </Block>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default SignIn;
