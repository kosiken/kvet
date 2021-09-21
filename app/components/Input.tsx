import React from 'react';
import {Control, useController} from 'react-hook-form';
import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

import {TextInput} from 'react-native-paper';
import {theme} from '../constants';

type Props = {
  control: Control;
  name: string;
  label: string;
  mode?: 'flat' | 'outlined';
  style?: StyleProp<TextStyle>;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};
const Input: React.FunctionComponent<Props> = props => {
  const {control, name, style, ...others} = props;

  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      theme={theme}
      style={style}
      {...others}
    />
  );
};

export default Input;
