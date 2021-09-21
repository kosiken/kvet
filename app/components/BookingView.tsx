import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  Avatar,
  Card,
  Title,
  Chip,
  Paragraph,
  Button,
  TouchableRipple,
  Text,
} from 'react-native-paper';
import {theme} from '../constants';
import Booking from '../models/Booking';
import Block from './Block';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const avatar = require('../assets/avatar.png');
const avatar1 = require('../assets/avatar1.png');

type Props = {
  booking: Booking;
  index: number;
  navigation?: NativeStackNavigationProp<any>;
  full?: boolean;
};
const BookingView: React.FC<Props> = ({
  booking,
  index,
  navigation,
  full = false,
}) => {
  const LeftComponent = () => (
    <Avatar.Image size={24} source={index % 2 ? avatar : avatar1} />
  );

  if (full) {
    return (
      <Block>
        <Text>lol</Text>
      </Block>
    );
  }
  return (
    <Card style={styles.card}>
      <Card.Title title={booking.cleaner.name} left={LeftComponent} />
      <Card.Content>
        <Title>Home Cleaning</Title>
        <Paragraph>{booking.dateStart.toDateString()}</Paragraph>
      </Card.Content>
      <View style={styles.sizedBox} />
      <Block flex={false} row>
        <Chip style={styles.chip}>{booking.bedroomNumber}</Chip>
        <Chip style={styles.chip}>{booking.frequency}</Chip>
        <Chip style={styles.chip}>{booking.status}</Chip>
      </Block>

      <Card.Actions>
        {['In Progress', 'Cancelled'].includes(booking.status) && (
          <Button mode="text" color={theme.colors.text}>
            Reschedule
          </Button>
        )}
        <Button mode="text" color={theme.colors.text}>
          Delete
        </Button>
        <Block flex={1} right row>
          <TouchableRipple
            onPress={() => {
              Alert.alert('Pressed', 'You pressed ' + booking.cleaner.name);
              if (navigation) {
                navigation.navigate('Details');
              }
            }}>
            <Ionicons name="chevron-forward-outline" size={25} />
          </TouchableRipple>
        </Block>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  chip: {
    marginRight: 5,
  },
  sizedBox: {height: 5},
});
export default BookingView;
