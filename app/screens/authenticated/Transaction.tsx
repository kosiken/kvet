import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import Block from '../../components/Block';

const Transaction = () => {
  return (
    <SafeAreaView>
      <Block middle center>
        <Text style={{marginBottom: 10}}>No Pending Requests</Text>
      </Block>
    </SafeAreaView>
  );
};

export default Transaction;

// const styles = StyleSheet.create({});
