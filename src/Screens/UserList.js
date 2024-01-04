/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);

  console.warn(userList);
  return (
    <View>
      <Text>UserList</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
