/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RemoveFromCart, addToCart} from './redux/action';
const Product = ({item}) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Mainreducer);
  const [isadded, setisAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveCart = item => {
    dispatch(RemoveFromCart(item.name));
  };

  useEffect(() => {
    let result = cartData.filter(element => {
      return element.name===item.name;
    });
    if(result.length){
      setisAdded(true)
    }else{
      setisAdded(false);
    }
  }, [cartData]);

  return (
    <View
      style={{
        marginBottom: 20,
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
        padding: 5,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.color}</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.price}</Text>
      <Image style={{height: 100, width: 100}} source={{uri: item.img}} />
      {isadded ? (
        <Button
          title="Remove from cart"
          onPress={() => handleRemoveCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );  
};

export default Product;


