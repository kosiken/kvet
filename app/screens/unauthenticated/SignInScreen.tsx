import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {SafeAreaView, StyleSheet, Alert, View, Image} from 'react-native';
import {Button} from 'react-native-paper';

import Block from '../../components/Block';
import Input from '../../components/Input';
import Text from '../../components/Text';
import {theme} from '../../constants';
const logo = require('../../assets/icon.png');
type SignIn = {
  email: string;
};

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const SignInScreen: React.FC<Props> = props => {
  const {control, handleSubmit} = useForm();
  const onSubmit: SubmitHandler<SignIn> = data => {
    Alert.alert(JSON.stringify(data));
  };
  return (
    <SafeAreaView style={styles.main}>
      <Block flex={1} middle>
        <Block flex={false} middle center>
          <Image resizeMode="contain" source={logo} style={styles.image} />
        </Block>
        <Block
          padding={10}
          keyboardAvoiding
          keyBoardAvoidingProps={{behavior: 'height'}}
          flex={false}
          middle>
          <Input
            control={control}
            mode={'outlined'}
            name={'email'}
            label="Email"
            keyboardType={'email-address'}
          />
          <View style={styles.sizedBox} />
          <Input
            control={control}
            mode={'outlined'}
            name={'password'}
            secureTextEntry
            label="Password"
          />
        </Block>
        <Block flex={false} middle center margin={[10, 0]}>
          <Button
            mode="contained"
            color={theme.colors.primary}
            dark
            onPress={handleSubmit(onSubmit)}>
            Continue
          </Button>
        </Block>
        <Block flex={false} middle center margin={[10, 0]}>
          <Button
            mode="text"
            color={theme.colors.accent}
            dark
            onPress={props.navigation.goBack}>
            Cancel
          </Button>
        </Block>
      </Block>
      <Text center>All rights reserved</Text>
    </SafeAreaView>
  );
};

export default SignInScreen;

// const styles = StyleSheet.create({});
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffffff'},
  image: {
    // overflow: 'visible',
    width: 50,
    height: 50,
  },
  sizedBox: {height: 10},
});
