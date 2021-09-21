import React from 'react';

import Block from '../../components/Block';
// import {theme} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
// import Text from '../../components/Text';
import {Button} from 'react-native-paper';
import {theme} from '../../constants';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const Decison: React.FC<Props> = props => {
  return (
    <Block flex={1} middle center>
      <Button
        mode="contained"
        color={theme.colors.accent}
        dark
        onPress={() => {
          props.navigation.navigate('SignIn');
        }}>
        In Progress
      </Button>
    </Block>
  );
};

export default Decison;
