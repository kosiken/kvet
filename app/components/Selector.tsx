import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../constants';
import Block from './Block';

type Props = {
  selected: string;
  options: string[];
  style?: any;
  changeActive: (selected: string) => void;
};
const Selector: React.FC<Props> = props => {
  const [active, setActive] = useState(props.selected);

  return (
    <Block
      flex={false}
      row
      center
      style={[styles.tab, props.style && props.style]}>
      <ScrollView horizontal>
        {props.options.map((child, index) => (
          <Block
            key={'choice-' + index}
            padding={[10, 0]}
            margin={[0, 10, 0]}
            flex={false}
            style={active === child ? styles.active : styles.inactive}
            color="transparent">
            <TouchableOpacity
              onPress={() => {
                setActive(child);
                props.changeActive(child);
              }}>
              <Text>{child}</Text>
            </TouchableOpacity>
          </Block>
        ))}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  bottom: {
    shadowColor: '#ffffff',
    shadowOpacity: 0,
  },
  tab: {
    borderBottomColor: '#000000',
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  active: {
    borderBottomColor: theme.colors.accent,
    borderBottomWidth: 2,
  },

  inactive: {
    color: '#000000',
  },
});

export default Selector;
