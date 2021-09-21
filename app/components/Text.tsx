import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../constants';

type Props = {
  red?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  title?: boolean;
  body?: boolean;
  caption?: boolean;
  small?: boolean;
  size?: boolean;
  transform?: boolean;
  align?: boolean;
  // styling
  regular?: boolean;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  weight?: boolean;
  light?: boolean;
  center?: boolean;
  right?: boolean;
  spacing?: boolean; // letter-spacing
  height?: boolean; // line-height
  // colors
  color?: string;
  accent?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  black?: boolean;
  white?: boolean;
  gray?: boolean;
  animated?: boolean;
  gray2?: boolean;
  style?: any;
  children: string;
};

const RelicText: React.FC<Props> = props => {
  const {
    red,
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    small,
    size,
    transform,
    align,
    // styling
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    accent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    animated,
    gray2,
    style,
    children,
    ...otherProps
  } = props;

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && {fontSize: size},
    transform && {textTransform: transform},
    align && {textAlign: align},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && {color},
    // color shortcuts
    accent && styles.accent,

    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    red && styles.red,

    style, // rewrite predefined styles
  ];
  if (animated) {
    return (
      <Animated.Text style={textStyles} {...otherProps}>
        {children}
      </Animated.Text>
    );
  }

  return (
    <Text style={textStyles} {...otherProps}>
      {children}
    </Text>
  );
};

export default RelicText;

const styles = StyleSheet.create<any>({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '200',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  accent: {color: theme.colors.accent},
  primary: {color: theme.colors.primary},
  secondary: {color: theme.colors.secondary},
  tertiary: {color: theme.colors.tertiary},
  black: {color: theme.colors.black},
  white: {color: theme.colors.white},
  gray: {color: theme.colors.grey},
  gray2: {color: theme.colors.gray2},
  red: {color: theme.colors.red},
  // fonts
  h1: {fontSize: theme.sizes.h1},
  h2: {fontSize: theme.sizes.h2},
  h3: {fontSize: theme.sizes.h3},
  title: {fontSize: theme.sizes.title},
  body: {fontSize: theme.sizes.body},
  caption: {fontSize: theme.sizes.caption},
  small: {fontSize: theme.sizes.small},
});
