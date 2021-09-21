import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {useSelector} from 'react-redux';
import Block from '../../components/Block';
import Selector from '../../components/Selector';
import Navbar from '../../components/Navbar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Booking, User} from '../../models';
import BookingView from '../../components/BookingView';
import {Text, Button} from 'react-native-paper';
import {theme} from '../../constants';
type Props = {
  navigation: NativeStackNavigationProp<any>;
};
const Dashboard: React.FC<Props> = ({navigation}) => {
  // const isDarkMode = useColorScheme() === 'dark';

  const [active, setActive] = useState('All');
  const {user, booking} = useSelector((state: any) => {
    return {
      user: state.auth.user,
      // theme: state.auth.theme,
      booking: state.booking.bookings,
    };
  });
  let theUser = user as User;
  const [bookings, setBookings] = useState(booking as Booking[]);

  const body = () => {
    if (bookings.length > 0) {
      return (
        <>
          <View style={{height: 10}} />
          <ScrollView>
            {bookings.map((b, i) => (
              <BookingView
                key={'booking' + i}
                index={i}
                booking={b}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </>
      );
    } else {
      return (
        <Block middle center>
          <Text style={styles.text}>No Pending Requests</Text>
          <Button
            mode="contained"
            color={theme.colors.accent}
            dark
            onPress={() => navigation.navigate('Add New')}>
            Add new
          </Button>
        </Block>
      );
    }
  };

  return (
    <Block style={styles.main}>
      <Navbar navigation={navigation} screenName={theUser && theUser.name} />

      <Selector
        selected={active}
        options={['All', 'Pending', 'Completed', 'Cancelled']}
        changeActive={s => {
          // console.log(theme);
          setActive(s);
          if (s === 'All') {
            setBookings(booking as Booking[]);
          } else {
            setBookings((booking as Booking[]).filter(b => b.status === s));
          }
        }}
      />
      {body()}
    </Block>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    marginBottom: 10,
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

export default Dashboard;
