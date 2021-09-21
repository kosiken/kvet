import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Block from '../../components/Block';
import {theme} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
const text =
  'I was thinking we put intro illustrations here. Like a lot of apps do when you open them the first time';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

type Illustration = {
  id: number;
  source: any;
  color: string;
  text: string;
};
const illustrations: Illustration[] = [
  {
    id: 1,
    source: require('../../assets/illustration_1.png'),
    color: '#7BE98E',
    text,
  },
  {
    id: 2,
    source: require('../../assets/illustration_2.png'),
    color: '#4587F2',
    text,
  },

  {
    id: 3,
    source: require('../../assets/logo.png'),
    color: '#E8D0B1',
    text,
  },
];

const Onboarding: React.FC<Props> = ({navigation}) => {
  const width = Dimensions.get('window').width;
  let scrollX = new Animated.Value(1);
  const onNextClick = () => navigation.navigate('Decision');

  const renderIllustration = (item: Illustration, index: number) => {
    return (
      <Block
        center
        color={item.color}
        flex={1}
        style={{
          width,
        }}>
        <SafeAreaView>
          <Block center middle flex={2} padding={[0, 25, 0, 25]}>
            <Image
              resizeMode="contain"
              source={item.source}
              style={styles.image}
            />
          </Block>
          <Block flex={false} padding={[0, 0, 80]}>
            {index === 2 ? (
              <Button
                mode="text"
                color={theme.colors.accent}
                onPress={onNextClick}>
                Continue
              </Button>
            ) : (
              <Text>{item.text.trim()}</Text>
            )}
          </Block>
        </SafeAreaView>
      </Block>
    );
  };

  const renderSteps = () => {
    let stepPosition = Animated.divide(scrollX, width);
    return (
      <Block style={styles.stepsContainer} row center middle flex={false}>
        {illustrations.map((item, index) => {
          let opacity = stepPosition.interpolate({
            inputRange: [index - 2, index - 1, index, index + 1],
            outputRange: [0.2, 0.2, 1, 0.2],
            extrapolate: 'clamp',
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color={theme.colors.text}
              style={[styles.steps, {opacity}]}
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block flex={1}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        scrollEventThrottle={16}
        pagingEnabled
        data={illustrations}
        keyExtractor={(item, index) => 'index' + index}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => renderIllustration(item, index)}
      />
      {renderSteps()}
    </Block>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  image: {
    overflow: 'visible',
    width: 300,
  },
  stepsContainer: {
    position: 'absolute',
    bottom: 10,
    width: Dimensions.get('window').width,
    height: 50,
  },
});
