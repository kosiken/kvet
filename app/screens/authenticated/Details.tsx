import React from 'react';
// import {Dimensions, Animated, FlatList} from 'react-native';
import {Text} from 'react-native-paper';

// import {Text} from 'react-native-paper';
import Block from '../../components/Block';
// import {theme} from '../../constants';

const Details = () => {
  // const width = Dimensions.get('window').width;
  // let scrollX = new Animated.Value(1);
  // const colors = ['tomato', 'blue', 'pink', 'yellow'];

  // const renderSteps = () => {
  //   let stepPosition = Animated.divide(scrollX, width);
  //   return (
  //     <Block row center middle flex={2}>
  //       {colors.map((item, index) => {
  //         let opacity = stepPosition.interpolate({
  //           inputRange: [index - 2, index - 1, index, index + 1],
  //           outputRange: [0.2, 0.2, 1, 0.2],
  //           extrapolate: 'clamp',
  //         });
  //         console.log(opacity);

  //         return (
  //           <Block
  //             animated
  //             flex={false}
  //             key={`step-${index}`}
  //             color={theme.colors.text}
  //             style={[styles.steps, {opacity}]}
  //           />
  //         );
  //       })}
  //     </Block>
  //   );
  // };

  return (
    <Block flex={1}>
      <Text>Lol</Text>
    </Block>
  );
};

export default Details;

//
