import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4545B5',
    accent: '#FF8466',
    background: 'white',
    secondary: '#887fb3',
    tertiary: '#B93EA6',
    black: '#323643',
    white: '#FFFFFF',
    gray: '#F0F0F0',
    gray2: '#E7E7E7',
    red: '#DC3224',
    grey: '#919191',
    green: '#F85186',
  },
  sizes: {
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,

    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
    small: 10,
  },
};

export {theme};
