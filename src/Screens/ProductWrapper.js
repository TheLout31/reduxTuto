/* eslint-disable prettier/prettier */
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import Product from '../Product';

export default function ProductWrapper({navigation}) {
  const product = [
    {
      name: 'samsung',
      color: 'purple',
      price: 50000,
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'apple',
      color: 'blue',
      price: 500000,
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'mi',
      color: 'yellow',
      price: 5000,
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'oneplus',
      color: 'lightblue',
      price: 55000,
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <ScrollView style={{flex: 1}}>
      <Button title="new screen" onPress={() => navigation.navigate('User')} />
      <Header />
      {product.map(item => (
        <Product item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
