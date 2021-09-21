import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';
import {theme} from '../constants';
import {useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
type Props = {
  navigation: NativeStackNavigationProp<any>;
  screenName?: string;
};
const Navbar: React.FC<Props> = ({...props}) => {
  const navigation = props.navigation;

  const route = useRoute();

  let screenName = props.screenName || route.name;

  const previous = navigation.canGoBack();

  return (
    <Appbar style={styles.bottom}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={'dark-content'}
      />
      {previous && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={screenName} />
      {!previous && (
        <Appbar.Action
          icon="plus"
          color={theme.colors.accent}
          onPress={() => {}}
        />
      )}
      {!previous && <Appbar.Action icon="refresh" onPress={() => {}} />}
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    shadowColor: '#ffffff',
    shadowOpacity: 0,
    flex: 0,
  },
  tab: {
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  active: {
    position: 'absolute',
    top: 80,
  },
});
export default Navbar;
