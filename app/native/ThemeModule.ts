import {NativeModules} from 'react-native';

const {ThemeModule} = NativeModules;
export interface ThemeInterface {
  getPhoneTheme(show: boolean): string;
}

export default ThemeModule as ThemeInterface;
