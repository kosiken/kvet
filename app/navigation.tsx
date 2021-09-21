import React from 'react';
import {useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from './screens/authenticated/Dashboard';
import Transaction from './screens/authenticated/Transaction';
import Profile from './screens/authenticated/Profile';
import Details from './screens/authenticated/Details';
// import AddNew from './screens/authenticated/AddNew';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SignIn from './screens/authenticated/SignIn';
import Onboarding from './screens/unauthenticated/Onboarding';
import Decison from './screens/unauthenticated/Decison';
import SignInScreen from './screens/unauthenticated/SignInScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const UnAuthStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <HomeStack.Navigator
        screenOptions={{
          header: () => {
            return <View />;
          },
        }}>
        <HomeStack.Screen name="HomeScreen" component={Dashboard} />
        <HomeStack.Screen name="Details" component={Details} />
        <HomeStack.Screen name="Add New" component={/*AddNew*/ SignIn} />
      </HomeStack.Navigator>
    </SafeAreaView>
  );
}
const AppAuthenticated = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={options => ({
          tabBarIcon: ({focused, color, size}) => {
            let {route} = options;
            let iconName = 'md-person';
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'american-football-outline' : 'ios-list';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          header: () => <View />,
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const AppUnAuthenticated = () => {
  return (
    <NavigationContainer>
      <UnAuthStack.Navigator
        screenOptions={{
          header: () => {
            return <View />;
          },
        }}>
        <UnAuthStack.Screen name="Onboarding" component={Onboarding} />
        <UnAuthStack.Screen name="Decision" component={Decison} />
        <UnAuthStack.Screen name="SignIn" component={SignInScreen} />
      </UnAuthStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffffff'},
});

const App: React.FC = () => {
  const {authenticated} = useSelector((state: any) => {
    return {
      authenticated: state.auth.authorized,
    };
  });
  console.log(authenticated);

  if (authenticated) {
    return <AppAuthenticated />;
  } else {
    return <AppUnAuthenticated />;
  }
};
export default App;
