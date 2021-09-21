import React from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleSheet,
  View,
} from 'react-native';

import {theme} from '../constants';

type Props = {
  flex?: boolean | number;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  card?: boolean;
  shadow?: boolean;
  color?: string;
  space?: string;
  padding?: number[] | number;
  margin?: number[] | number;
  animated?: boolean;
  wrap?: boolean;
  style?: any;
  keyBoardAvoidingProps?: KeyboardAvoidingViewProps;
  keyboardAvoiding?: boolean;
  children?: any;
};

const Block: React.FC<Props> = props => {
  const handleMargins = () => {
    const {margin} = props;
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (Array.isArray(margin)) {
      const marginSize = margin.length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };

  const handlePaddings = () => {
    const {padding} = props;
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (Array.isArray(padding)) {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  };

  const {
    animated,
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    padding,
    margin,
    keyboardAvoiding,
    wrap,
    style,
    children,
    keyBoardAvoidingProps,
    ...others
  } = props;

  const blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && {...handleMargins()},
    padding && {...handlePaddings()},
    card && styles.card,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    wrap && {flexWrap: 'wrap'},
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    style, // rewrite predefined styles
  ];
  // if (style) console.log(blockStyles, style);
  if (animated) {
    return (
      <Animated.View style={blockStyles} {...others}>
        {children}
      </Animated.View>
    );
  } else if (keyboardAvoiding) {
    let avoidingProps = keyBoardAvoidingProps;
    if (avoidingProps === undefined || avoidingProps === null) {
      avoidingProps = {behaviour: 'padding'} as KeyboardAvoidingViewProps;
    }
    let object = {...others, ...avoidingProps};
    return (
      <KeyboardAvoidingView style={blockStyles} {...object}>
        {children}
      </KeyboardAvoidingView>
    );
  }
  return (
    <View style={blockStyles} {...others}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create<any>({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: theme.sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 13,
    elevation: 5,
  },
  accent: {backgroundColor: theme.colors.accent},
  primary: {backgroundColor: theme.colors.primary},
  surface: {backgroundColor: theme.colors.surface},
  disabled: {backgroundColor: theme.colors.disabled},
});

export default Block;
